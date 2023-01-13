import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSavingAlbum } from "../store";
import { useModal } from "./useModal";

export const initialColectState = {
  title: "",
  type: "",
}

export const useColectModal = () => {

  const dispatch = useDispatch();
  const { album, activeAlbum } = useSelector( (state) => state.albums);
  const { isModalOpen, closeTypeModal } = useModal();
  const [formValues, setFormValues] = useState(initialColectState);

  useEffect(() => {
    if (activeAlbum !== null) {
      setFormValues({ ...activeAlbum });
    }
  
  }, [activeAlbum])
  

  const onImputChange = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value,
    });
  };

  const validDuplicateTitle = () => {
    const isTitleExist = activeAlbum
      ? album.filter((element) =>
          element._id !== activeAlbum._id && (
          element.title.split(' (')[0] === formValues.title ||
          element.title === formValues.title)
        )
      : album.filter((element) =>
          element.title.split(' (')[0] === formValues.title ||
          element.title === formValues.title
        );

    return isTitleExist;
  }

  const validarAlbumTitle = () => {
    const isTitleExist = validDuplicateTitle();
    if (isTitleExist.length > 0) {
      dispatch(startSavingAlbum({...formValues, title: `${formValues.title} (${isTitleExist.length})`}));
    } else {
      dispatch(startSavingAlbum(formValues));
    }
  }

  const onTypeChanged = (_, { props }) => {
    setFormValues({
      ...formValues,
      type: props.value,
    });
  };
  
  const onSubmit = (event) => {
    event.preventDefault();
    if (formValues.title.length <= 0 || formValues.type == "") return;
    validarAlbumTitle();
    closeTypeModal();
    setFormValues(initialColectState);
  }


  return {
    formValues,
    setFormValues,
    isModalOpen,
    closeTypeModal,
    onImputChange,
    onTypeChanged,
    onSubmit,
  }
}

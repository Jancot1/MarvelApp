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
  const { activeAlbum } = useSelector( (state) => state.albums);
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

  const onTypeChanged = (_, { props }) => {
    setFormValues({
      ...formValues,
      type: props.value,
    });
  };
  
  const onSubmit = (event) => {
    event.preventDefault();
    if (formValues.title.length <= 0 || formValues.type == "") return;
    dispatch(startSavingAlbum(formValues));
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

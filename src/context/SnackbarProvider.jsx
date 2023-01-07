import { useState } from "react"
import { SnackbarContext } from "./SnackbarContext";
import { Snackbars } from "../marvel/components/SnackBar";

const initialState = { type: '', message: '' };

export const SnackbarProvider = ({ children }) => {

  const [isOpenSnack, setIsOpenSnack] = useState(false);
  const [SnackContent, setSnackContent] = useState(initialState);

  const setAlert = ({ type, message}) => {
    setSnackContent({ type, message });
    setIsOpenSnack(true);
    setTimeout(() => {
      setSnackContent(initialState);
    }, 1501);
  }

  return (
    <SnackbarContext.Provider value={{ isOpenSnack, setIsOpenSnack, setAlert }}>
      {children}
      <Snackbars type={SnackContent.type} message={SnackContent.message} isOpenSnack={isOpenSnack}/>
    </SnackbarContext.Provider>
  )
}

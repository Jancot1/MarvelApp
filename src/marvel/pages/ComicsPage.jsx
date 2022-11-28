import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { getComics } from "../../store/slices/thunks";

export const ComicsPage = () => {

  const dispatch = useDispatch(); 

  useEffect(() => {
    dispatch(getComics());
  
  }, [])
  
  
  return (
    <>
      <h1>Comics</h1>
      <hr/>

      <ul>
        <li>comic 1</li>
        <li>comic 2</li>
        <li>comic 3</li>
      </ul>
    </>
  )
}

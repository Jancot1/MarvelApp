import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux";
import { getComics } from "../../store/slices/thunks";

export const ComicsPage = () => {

  const dispatch = useDispatch();
  const { comics } = useSelector( state => state.comics );

  useEffect(() => {
    dispatch(getComics());
  
  }, [])
  
  return (
    <>
      <h1>Comics</h1>
      <hr/>

      <ul>
        {
          comics.map( comics => (
            <li key={comics.id}> {comics.title} </li>
          ))
        }
      </ul>
    </>
  )
}

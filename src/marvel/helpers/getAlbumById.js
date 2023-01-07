import { useSelector } from "react-redux";

export const getAlbumById = (id) => {

  const { album } = useSelector(state => state.albums);

  return album.find(album => album._id === parseInt(id));

}
import { useSelector } from "react-redux";

export const getCharacterById = (id) => {

    const { characters } = useSelector(state => state.characters);

    return characters.find(character => character.id === parseInt(id));

}
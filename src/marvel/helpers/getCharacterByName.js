import { useSelector } from "react-redux";

export const getCharacterByName = (id) => {

    const { characters } = useSelector(state => state.characters);

    return characters.find(character => character.id === parseInt(id));

}
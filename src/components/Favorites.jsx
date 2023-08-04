/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import Button from "./Button";

import { favoritesStyles } from "./styles";

export default function Favorites({favoritesArray, setFavorites, isFavoritesEmpty, setIsFavoritesEmpty}) {
    let id = 0;

    const favoritesList = favoritesArray.map(favorite => {
        id += 1;
        return (
            <li key={id} className="py-1 sm:py-2">
                <p>{favorite}</p>
            </li>
        )
    })

    function clearFavorites() {
        setFavorites([]);
        setIsFavoritesEmpty(true);
    }

    const message = (
        <p className={favoritesStyles.message}>
            You currently have no favorite strategies saved.
        </p>
    );

    const displayUi = (
        <>
            <ul className={favoritesStyles.ul}>
                    {favoritesList}
            </ul>
            <Button onClick={clearFavorites}>Clear favorites</Button>
        </>
    )
   
    return (
        <div className={favoritesStyles.div}>
            <h2 className={favoritesStyles.h2}>Favorites</h2>

           {isFavoritesEmpty ? message : displayUi}
            
        </div>
    )
}

Favorites.PropTypes = {
    favoritesArray: PropTypes.array,
    setFavorites: PropTypes.func,
    isFavoritesEmpty: PropTypes.bool,
    setIsFavoritesEmpty: PropTypes.func,
}
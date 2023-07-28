import Button from "./Button";

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
        <p className="text-nomad-500 text-center italic px-4">
            You currently have no favorite strategies saved.
        </p>
    );

    const displayUi = (
        <>
            <ul className="sm:text-lg list-square px-4 py-4">
                    {favoritesList}
            </ul>
            <Button onClick={clearFavorites}>Clear favorites</Button>
        </>
    )
   
    return (
        <div className="flex flex-col items-center gap-4 py-6">
            <h1 className="text-lg sm:text-xl uppercase font-bold">Favorites</h1>

           {isFavoritesEmpty ? message : displayUi}
            
        </div>
    )
}
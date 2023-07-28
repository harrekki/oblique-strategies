import Button from "./Button";

export default function Favorites({favoritesArray, setFavorites}) {
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
    }
   

    return (
        <div className="flex flex-col items-center gap-4 py-6">
            <h1 className="text-lg sm:text-xl uppercase font-bold">Favorites</h1>
            <ul className="sm:text-lg list-square px-4 py-4">
                {favoritesList}
            </ul>
            <Button onClick={clearFavorites}>Clear favorites</Button>
        </div>
    )
}
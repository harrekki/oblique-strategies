import Button from "./Button";
import Card from "./Card";

export default function Spread({spreadArray, setSpread, isSpreadEmpty, setIsSpreadEmpty}) {
    
    let id = 0;

    const smallCard = "text-md p-6 w-40 h-30 sm:text-lg sm:w-60 sm:h-40"

    const layout = spreadArray.map(card => {
        id += 1;
        return (
            <div key={id}>
                <Card strategy={card} cardSize={smallCard}/>
            </div>
        )
    })

    function clearSpread() {
        setSpread([]);
        setIsSpreadEmpty(true);
    }

    const message = (
        <p className="text-nomad-500 text-center italic px-4">
            Add cards to your layout with the &quot;Add to spread&quot; button.
        </p>
    );

    const displayUi = (
        <>
            {layout}
            <Button onClick={clearSpread}>Clear spread</Button>
        </>
    );

    return (
        
        <div className="flex flex-col items-center gap-4 py-6">
            {isSpreadEmpty ? message : displayUi}
        </div>
        
    )
}
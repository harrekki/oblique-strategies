import Button from "./Button";
import Card from "./Card";

export default function Spread({spreadArray, setSpread}) {
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
    }

    return (
        <div className="flex flex-col items-center gap-4 py-6">
            {layout}
            <Button onClick={clearSpread}>Clear spread</Button>
        </div>
    )
}
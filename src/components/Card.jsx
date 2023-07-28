export default function Card({ strategy, cardSize }) {

    const cardStyles = "flex justify-center items-center border border-shark-400 rounded-2xl drop-shadow-xl";
    const cardBack = "bg-shark-950";
    const cardFront = "bg-nomad-100";

    return (
        <div
            className={`${cardStyles} ${cardSize} ${strategy === null ? cardBack : cardFront}`}
        >
            <p className="text-shark-950 text-center">{strategy}</p>
        </div>
    )
}

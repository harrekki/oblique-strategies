import React from "react";

export default function Card({ strategy }) {

    const cardStyles = "flex justify-center items-center p-8 w-112 h-72 border border-shark-400 rounded-2xl drop-shadow-xl";
    const cardBack = "bg-shark-950";
    const cardFront = "bg-nomad-100";

    return (
        <div
            className={`${cardStyles} ${strategy === null ? cardBack : cardFront}`}
        >
            <p className="text-2xl text-shark-950 text-center">{strategy}</p>
        </div>
    )
}

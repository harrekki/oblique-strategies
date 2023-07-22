import React from "react";

export default function Button({children, onClick}) {

    return (
        <button
            className="
                bg-nomad-400
                text-lg
                text-center
                px-8
                py-2
                border
                border-nomad-800
                rounded-sm
                drop-shadow-sm
            "
            onClick={onClick}
        >
            {children}
        </button>
    )
}
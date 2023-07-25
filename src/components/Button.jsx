import React from "react";

export default function Button({children, onClick}) {

    return (
        <button
            className="
                bg-nomad-400
                text-lg
                text-center
                px-8
                py-4
                border
                border-nomad-800
                rounded-sm
                drop-shadow-sm
                transition
                ease-in-out
                delay-50
                sm:hover:bg-nomad-500
                sm:hover:text-nomad-50
                duration-300
            "
            onClick={onClick}
        >
            {children}
        </button>
    )
}
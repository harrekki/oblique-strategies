import React from "react";

export default function HelpButton({onClick, children}) {
     return (
        <div 
            className="
                bg-nomad-400
                text-nomad-950
                text-xl
                flex 
                justify-center 
                items-center 
                ml-10
                w-12
                h-12
                sm:w-10
                sm:h-10
                border-4 
                border-nomad-800 
                rounded-full
                cursor-pointer
                transition
                ease-in-out
                sm:hover:bg-nomad-500
                sm:hover:border-nomad-900
                sm:hover:text-nomad-50
                duration-300
            "
            onClick={onClick}
        >
            {children}
        </div>
     )
}
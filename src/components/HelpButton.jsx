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
                w-10
                h-10
                border-4 
                border-nomad-800 
                rounded-full
                cursor-pointer
                hover:bg-nomad-500
                hover:border-nomad-900
                hover:text-nomad-50
            "
            onClick={onClick}
        >
            {children}
        </div>
     )
}
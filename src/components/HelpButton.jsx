import React from "react";

export default function HelpButton({onClick}) {
     return (
        <div 
            className="
                bg-nomad-400
                flex 
                justify-center 
                items-center 
                w-10
                h-10
                border-4 
                border-nomad-900 
                rounded-full
                cursor-pointer
            "
            onClick={onClick}
        >
            <i className="fa-solid fa-question text-nomad-950 text-xl"></i>
        </div>
     )
}
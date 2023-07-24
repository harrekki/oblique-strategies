import React from "react";

export default function Link({children, url}) {

    return (
        <a 
            href={url} 
            target="_blank" 
            rel="noreferrer"
            className="
                hover:text-nomad-600 
                hover:border-b-2 
                border-nomad-600
                text-nomad-800
            "
        >
            {children}
        </a>
    )
    
}
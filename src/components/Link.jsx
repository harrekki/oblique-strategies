import React from "react";

export default function Link({children, url}) {

    return (
        <a 
            href={url} 
            target="_blank" 
            rel="noreferrer"
            className=""
        >
            {children}
        </a>
    )
    
}
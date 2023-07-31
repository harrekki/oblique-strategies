import PropTypes from "prop-types";

export default function Link({children, url}) {

    return (
        <a 
            href={url} 
            target="_blank" 
            rel="noreferrer"
            className="
                text-nomad-800
                hover:border-b-2 
                border-nomad-600
                hover:text-nomad-600 
            "
        >
            {children}
        </a>
    )
    
}

Link.PropTypes = {
    children: PropTypes.any,
    url: PropTypes.string,
}
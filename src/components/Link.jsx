import PropTypes from "prop-types";
import {styles} from "./styles";

export default function Link({children, url}) {

    return (
        <a 
            href={url} 
            target="_blank" 
            rel="noreferrer"
            className={styles.link}
        >
            {children}
        </a>
    )
    
}

Link.PropTypes = {
    children: PropTypes.any,
    url: PropTypes.string,
}
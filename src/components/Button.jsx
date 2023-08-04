/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import {styles} from "./styles";
 
export default function Button({children, onClick}) {

    return (
        <button
            className={styles.button}
            onClick={onClick}
        >
            {children}
        </button>
    )
}

Button.PropTypes = {
    children: PropTypes.any,
    onClick: PropTypes.func,
}
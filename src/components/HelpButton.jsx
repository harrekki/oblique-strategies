/* eslint-disable react/prop-types */
import PropTypes from 'prop-types';
import styles from "./styles";

export default function HelpButton({onClick, children}) {
     return (
        <div 
            className={styles.helpButton}
            onClick={onClick}
        >
            {children}
        </div>
     )
}

HelpButton.PropTypes = {
    onClick: PropTypes.func,
    children: PropTypes.any,
}
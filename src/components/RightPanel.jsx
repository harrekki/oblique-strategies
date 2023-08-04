/* eslint-disable react/prop-types */
import {createRef, useEffect} from "react";
import PropTypes from "prop-types";
import { rightPanelStyles } from "./styles";

function RightPanel({children, rightWidth, setRightWidth}) {
    const rightRef = createRef();

    useEffect(() => {
        if(rightRef.current) {
            if(!rightWidth) {
                setRightWidth(rightRef.current.clientWidth);
                return;
            }

            rightRef.current.style.width = `${rightWidth}px`;
        }
    }, [rightRef, rightWidth, setRightWidth]);

    return (
        <div 
            ref={rightRef} 
            className={rightPanelStyles.div}
        >
            {children}
        </div>
    )
}

RightPanel.PropTypes = {
    children: PropTypes.any,
    rightWidth: PropTypes.number,
    setRightWidth: PropTypes.func,
    className: PropTypes.string,
}

export default RightPanel;
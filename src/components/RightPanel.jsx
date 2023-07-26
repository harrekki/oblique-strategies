import {createRef, useEffect} from "react";

function RightPanel({children, rightWidth, setRightWidth, className}) {
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
        <div ref={rightRef} className={className ?? ""}>{children}</div>
    )
}

export default RightPanel;
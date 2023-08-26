import { useState, useRef, useEffect, createContext } from "react";

const ToggleContext = createContext();

export default function Toggle({children, onToggle = () => {}}) {
    const [on, setOn] = useState(false);
    const firstRender = useRef(true);

    function toggle() {
        setOn(prevOn => !prevOn);
    }

    useEffect(() => {
        firstRender.current 
            ? firstRender.current = false
            : onToggle();
    }, [on, onToggle])

    return (
        <ToggleContext.Provider value={{on, toggle}}>
            {children}
        </ToggleContext.Provider>
    )
}

export {ToggleContext};
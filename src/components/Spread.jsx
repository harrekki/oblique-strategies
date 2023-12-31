/* eslint-disable react/prop-types */
import PropTypes from "prop-types";

import Button from "./Button";
import Card from "./Card";
import { nanoid } from "nanoid";

import {spreadStyles} from "./styles";


export default function Spread({spreadArray, setSpread, isSpreadEmpty, setIsSpreadEmpty}) {
    
    const layout = spreadArray.map(card => {
        const id = nanoid();
        return (
            <div key={id}>
                <Card strategy={card} cardSize={spreadStyles.cardSize}/>
            </div>
        )
    })

    function clearSpread() {
        setSpread([]);
        setIsSpreadEmpty(true);
    }

    const message = (
        <p className={spreadStyles.message}>
            Add cards to your layout with the &quot;Add to spread&quot; button.
        </p>
    );

    const displayUi = (
        <>
            {layout}
            <Button onClick={clearSpread}>Clear spread</Button>
        </>
    );

    return (
        
        <div className={spreadStyles.spreadDiv}>
            {isSpreadEmpty ? message : displayUi}
        </div>
        
    )
}

Spread.PropTypes = {
    spreadArray: PropTypes.array,
    setSpread: PropTypes.func,
    isSpreadEmpty: PropTypes.bool,
    setIsSpreadEmpty: PropTypes.func,
}
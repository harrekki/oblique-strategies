/* eslint-disable react/prop-types */
import PropTypes from "prop-types";
import styles from "./styles";

export default function Card({ strategy, cardSize }) {

    return (
        <div
            className={`${styles.card} ${cardSize} ${strategy === null ? styles.cardBack : styles.cardFront}`}
        >
            <p className="text-shark-950 text-center">{strategy}</p>
        </div>
    )
}

Card.PropTypes = {
    strategy: PropTypes.any,
    cardSize: PropTypes.string
}

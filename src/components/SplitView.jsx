/* eslint-disable react/prop-types */
import {useState, createRef, useEffect} from "react";
import PropTypes from "prop-types";

import HelpPage from "./HelpPage";
import RightPanel from "./RightPanel";
import Card from "./Card";
import Button from "./Button";
import Favorites from "./Favorites";
import Spread from "./Spread";

import { splitViewStyles } from "./styles";

export default function SplitView({strategy, changeStrategy, displayHelp}) {

    /* ---------- State and functions for resizable frames ---------- */

    const [rightWidth, setRightWidth] = useState(300);
    const [separatorXPosition, setSeparatorXPosition] = useState();
    const [isDragging, setIsDragging] = useState(false);

    const splitPaneRef = createRef();

    const MIN_WIDTH = 250;

    const handleMouseDown = (event) => {
        setSeparatorXPosition(event.clientX);
        setIsDragging(true);
    }

    const handleTouchStart = (event) => {
        setSeparatorXPosition(event.touches[0].clientX);
        setIsDragging(true);
    }

    const onMove = (event) => {
        if(isDragging && rightWidth && separatorXPosition) {
            const newRightWidth = rightWidth - event.clientX + separatorXPosition;
            setSeparatorXPosition(event.clientX);
            
            if(newRightWidth < MIN_WIDTH) {
                setRightWidth(MIN_WIDTH);
                return;
            }
            
            if(splitPaneRef.current) {
                const splitPaneWidth = splitPaneRef.current.clientWidth;
                
                if(newRightWidth > splitPaneWidth - MIN_WIDTH) {
                    setRightWidth(splitPaneWidth - MIN_WIDTH);
                    return;
                } 
            }
            
            setRightWidth(newRightWidth);
        }
    }

    const handleMouseMove = (event) => {
        event.preventDefault();
        onMove(event);
    }

    const handleTouchMove = (event) => {
        onMove(event.touches[0].clientX);
    }

    const handleMouseUp = () => {
        setIsDragging(false);
    }

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('touchmove', handleTouchMove);
        document.addEventListener('mouseup', handleMouseUp);
        return () => {
          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('touchmove', handleTouchMove);
          document.removeEventListener('mouseup', handleMouseUp);
        }
      })
      
      /* ---- State and functions for Favorites and Spread components ---- */
    
    const [displayFavorites, setDisplayFavorites] = useState(false);
    const [spread, setSpread] = useState([]);
    const [isSpreadEmpty, setIsSpreadEmpty] = useState(spread ? true : false);
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);
    const [isFavoritesEmpty, setIsFavoritesEmpty] = useState(localStorage.getItem('favorites') ? false : true);
    
    const toggleFavorites = () => {
        setDisplayFavorites(prevState => !prevState);
    }
    
    function addToSpread() {
        if(strategy && !spread.includes(strategy)) {
            setSpread(prevSpread => [...prevSpread, strategy]);
            if(isSpreadEmpty) {
                setIsSpreadEmpty(false);
            }
        }
    }
    
    function addToFavorites() {
        if(strategy && !favorites.includes(strategy)) {
            setFavorites(prevFav => [...prevFav, strategy]);
            if(isFavoritesEmpty) {
                setIsFavoritesEmpty(false);
            }
        }
    }
    
    useEffect(() => {
        localStorage.setItem('favorites', JSON.stringify(favorites));
    }, [favorites])
    
      return (
          <div className="flex h-full" ref={splitPaneRef}> 
            
                { !displayHelp ?
                    <main className={splitViewStyles.main}>
                        <Card strategy={strategy} cardSize={splitViewStyles.cardSize} />
                        <div className={splitViewStyles.buttonDiv}>
                            <Button onClick={changeStrategy} >Draw Card</Button>
                            <Button onClick={addToSpread} >Add to spread</Button>
                            <Button onClick={addToFavorites} >Add to favorites</Button>
                        </div>
                    </main>
                : <HelpPage />
                }
            
            <div 
                className="px-2 cursor-ew-resize" 
                onMouseDown={handleMouseDown}
                onTouchStart={handleTouchStart}
                onTouchEnd={handleMouseUp}
            >
                <div className={splitViewStyles.divider}></div>
            </div>

            <RightPanel 
                rightWidth={rightWidth} 
                setRightWidth={setRightWidth}
            >
                <button 
                    className={splitViewStyles.button}
                    onClick={toggleFavorites}
                >
                    Show {displayFavorites ? "spread" : "favorites"} 
                    <i className="fa-solid fa-chevron-right ml-1"></i>
                </button>
                { displayFavorites
                    ? <Favorites 
                        favoritesArray={favorites} 
                        setFavorites={setFavorites} 
                        isFavoritesEmpty={isFavoritesEmpty} 
                        setIsFavoritesEmpty={setIsFavoritesEmpty}
                      />
                    : <Spread 
                        spreadArray={spread} 
                        setSpread={setSpread} 
                        isSpreadEmpty={isSpreadEmpty} 
                        setIsSpreadEmpty={setIsSpreadEmpty}
                      /> 
                }

            </RightPanel>
        </div>
    )
}

SplitView.PropTypes = {
    strategy: PropTypes.any,
    changeStrategy: PropTypes.func,
    displayHelp: PropTypes.bool,
    
}

    

import {useState, createRef, useEffect} from "react";

import HelpPage from "./HelpPage";
import RightPanel from "./RightPanel";
import Card from "./Card";
import Button from "./Button";
import Favorites from "./Favorites";
import Spread from "./Spread";

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

    const handleMouseMove = (event) => {
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

    const handleMouseUp = () => {
        setIsDragging(false);
    }

    useEffect(() => {
        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
        return () => {
          document.removeEventListener('mousemove', handleMouseMove);
          document.removeEventListener('mouseup', handleMouseUp);
        }
      })
      
      /* ---- State and functions for Favorites and Spread components ---- */
    
    const [displayFavorites, setDisplayFavorites] = useState(false);
    const [spread, setSpread] = useState([]);
    const [isSpreadEmpty, setIsSpreadEmpty] = useState(spread ? true : false);
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem('favorites')) || []);
    const [isFavoritesEmpty, setIsFavoritesEmpty] = useState(favorites ? true : false);
    
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
    
      const largeCard = "text-2xl p-8 w-80 h-60 sm:w-112 sm:h-72"
 
      return (
          <div className="flex h-full" ref={splitPaneRef}> 
            
                { !displayHelp ?
                    <main 
                        className="
                            flex 
                            flex-col 
                            grow 
                            justify-center 
                            items-center 
                            mt-0 
                            px-12
                            pb-12
                        "
                    >
                        <Card strategy={strategy} cardSize={largeCard} />
                        <div className='w-full flex flex-col sm:flex-row justify-center gap-6 sm:gap-20 mt-28'>
                            <Button onClick={changeStrategy} >Draw Card</Button>
                            <Button onClick={addToSpread} >Add to spread</Button>
                            <Button onClick={addToFavorites} >Add to favorites</Button>
                        </div>
                    </main>
                : <HelpPage />
                }
            
            <div className="px-2 cursor-ew-resize" onMouseDown={handleMouseDown}>
                <div className="w-2 h-full py-96 bg-shark-400 rounded"></div>
            </div>

            <RightPanel 
                rightWidth={rightWidth} 
                setRightWidth={setRightWidth}
                className="bg-shark-50 w-full flex flex-col item-center"
            >
                <button 
                    className="text-shark-950 font-bold text-lg self-end pt-4 mr-4 hover:text-nomad-700"
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

    

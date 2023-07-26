import {useState, createRef, useEffect} from "react";

import HelpPage from "./HelpPage";
import RightPanel from "./RightPanel";
import Card from "./Card";
import Button from "./Button";

export default function SplitView({strategy, changeStrategy, displayHelp}) {
    const [rightWidth, setRightWidth] = useState();
    const [separatorXPosition, setSeparatorXPosition] = useState();
    const [isDragging, setIsDragging] = useState(false);

    const splitPaneRef = createRef();

    const MIN_WIDTH = 0;

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
                        <Card strategy={strategy} />
                        <div className='w-full flex flex-col sm:flex-row justify-center gap-6 sm:gap-20 mt-28'>
                            <Button onClick={changeStrategy}>Draw Card</Button>
                            <Button>Add to spread</Button>
                            <Button>Add to favorites</Button>
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
                className="bg-shark-50"
            >
                <h1>Right Panel Content</h1>
            </RightPanel>
        </div>
    )
}

    

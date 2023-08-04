import { useState } from 'react';

import SplitView from './components/SplitView';
import Link from "./components/Link";
import HelpButton from './components/HelpButton';

import strategiesArray from './strategies';
import { appStyles } from './components/styles';
const strategies = strategiesArray.strategies;

function App() {
  const [strategy, setStrategy] = useState(null);
  const [displayHelp, setDisplayHelp] = useState(false);

  function changeStrategy() {
    setStrategy(strategies[Math.floor(Math.random() * strategies.length)]);
  }

  function toggleHelp() {
    setDisplayHelp(prevDisplay => !prevDisplay);
  }
 
  return (
    <div className="flex flex-col">
      <header className={appStyles.header}> 
      
          <h1 className={appStyles.h1}>Oblique Strategies</h1>
          <HelpButton onClick={toggleHelp}>
            {displayHelp 
              ? <i className="fa-solid fa-arrow-left"></i>
              : <i className="fa-solid fa-question"></i>
            }
          </HelpButton>
    
      </header>

      <SplitView 
        strategy={strategy} 
        changeStrategy={changeStrategy} 
        displayHelp={displayHelp} 
      />

      <footer className={appStyles.footer}>
        <p>
          &copy; 2023 by <Link url="https://www.davidlarocco.dev/">David LaRocco</Link> 
        </p>
      </footer>
    </div>
  )
}

export default App;

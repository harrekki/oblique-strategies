import { useState } from 'react';

import SplitView from './components/SplitView';
import Link from "./components/Link";
import HelpButton from './components/HelpButton';

import strategiesArray from './strategies';
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
      <header className='flex flex-col w-11/12 shrink-0 relative py-4 mx-auto'> 
      
        <HelpButton onClick={toggleHelp}>
          {displayHelp 
            ? <i className="fa-solid fa-arrow-left"></i>
            : <i className="fa-solid fa-question"></i>
        }
        </HelpButton>
    
        <h1 className="text-nomad-950 text-4xl sm:text-6xl font-display text-center mt-4 sm:mt-1">Oblique Strategies</h1>
      </header>

      <SplitView 
        strategy={strategy} 
        changeStrategy={changeStrategy} 
        displayHelp={displayHelp} 
      />

      <footer className="w-full shrink-0 py-4 px-12 shadow-inner">
        <p className='text-sm text-shark-900 text-center'>
          &copy; 2023 by <Link url="https://www.davidlarocco.dev/">David LaRocco</Link> 
        </p>
      </footer>
    </div>
  )
}

export default App;

import { useState } from 'react';

import Card from "./components/Card";
import Button from "./components/Button";
import HelpPage from "./components/HelpPage";
import Link from "./components/Link";

import strategiesArray from './strategies';
import HelpButton from './components/HelpButton';

const strategies = strategiesArray.strategies;

function App() {
  const [strategy, setStrategy] = useState(null);
  const [displayHelp, setDisplayHelp] = useState(false);
  console.log(displayHelp);

  function changeStategy() {
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

      { !displayHelp ?
          <main 
            className="
              flex 
              flex-col 
              grow 
              justify-center 
              items-center 
              mt-20 
              px-12
              pb-12
            "
          >
          <Card strategy={strategy} />
          <div className='w-full flex flex-col sm:flex-row justify-center gap-6 sm:gap-20 mt-28'>
            <Button onClick={changeStategy}>Draw Card</Button>
            <Button>Add to spread</Button>
            <Button>Add to favorites</Button>
          </div>
          </main>
        : <HelpPage />
      }

      <footer className="w-full shrink-0 py-4 px-12 shadow-inner">
        <p className='text-sm text-shark-900 text-center'>
          &copy; 2023 by <Link url="https://www.davidlarocco.dev/">David LaRocco</Link> 
        </p>
      </footer>
    </div>
  )
}

export default App;

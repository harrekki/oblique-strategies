import { useState } from 'react';
import Card from "./components/Card";
import Button from "./components/Button"
import HelpPage from './components/HelpPage';

import strategiesArray from './strategies';
import HelpButton from './components/HelpButton';

const strategies = strategiesArray.strategies;

function App() {
  const [strategy, setStrategy] = useState(null);
  const [displayHelp, setDisplayHelp] = useState(false);

  function changeStategy() {
    setStrategy(strategies[Math.floor(Math.random() * strategies.length)])
  }

  function toggleHelp() {
    setDisplayHelp(prevDisplay => !prevDisplay);
  }
 
  return (
    <div className="px-12">
      <header className='relative py-4'> 
      <span className='absolute top-5 left-0'><HelpButton onClick={toggleHelp}/></span>
        <h1 className="text-nomad-950 text-6xl font-display text-center">Oblique Strategies</h1>
      </header>

      { displayHelp ?
          <main className="flex flex-col justify-center items-center mt-20">
          <Card strategy={strategy} />
          <div className=' w-full flex justify-center gap-20 mt-28 scroll-py-8'>
            <Button onClick={changeStategy}>Draw Card</Button>
            <Button>Add to spread</Button>
            <Button>Add to favorites</Button>
          </div>
          </main>
        : <HelpPage />
      }

      <footer className="w-full py-4 px-12 fixed bottom-0 left-0 shadow-inner">
        <p className='text-sm text-shark-900 text-center'>&copy; 2023 by David LaRocco</p>
      </footer>
    </div>
  )
}

export default App

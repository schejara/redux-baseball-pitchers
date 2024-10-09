import { useState } from 'react';
import Pitchers from '../pitchers/pitchers';
import Catchers from '../catchers/CatchersList';

function App() {
  const [currentPitcher, setCurrentPitcher] = useState('Maud Nelson');
  const [currentCatcher, setCurrentCatcher] = useState('Elston Howard');

  const [pitcherList, setPitcherList] = useState(['Maud Nelson', 'Ila Borders', 'Don Newcombe', 'CC Sabathia']);
  const [catcherList, setCatcherList] = useState(['Roy Campanella', 'Elston Howard', 'Kenji Jojima']);
  //const [newPitcher, setNewPitcher] = useState('');
  const [newCatcher, setNewCatcher] = useState('');

  

  ;

  // add new catcher to array. this will move to the catcher reducer!
  
  return (
    <div>
      <h1>Redux Baseball Pitchers</h1>
      <h2>On the Mound: {currentPitcher}</h2>
      <h2>Behind the Plate: {currentCatcher}</h2>
      <div>Total Pitchers: {pitcherList.length}</div>
      <div>Total Catchers: {catcherList.length}</div>
      <h3>All Pitchers</h3>
      <Pitchers/>
      
      <h3>All Catchers</h3>
      <Catchers/>
    </div>
  );
}

export default App;

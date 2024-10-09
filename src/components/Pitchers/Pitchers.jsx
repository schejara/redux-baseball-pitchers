import { useState } from 'react';
import { useDispatch } from "react-redux"



function Pitchers(){
    const dispatch = useDispatch()
    const [currentPitcher, setCurrentPitcher] = useState('Maud Nelson');
    const [pitcherList, setPitcherList] = useState(['Maud Nelson', 'Ila Borders', 'Don Newcombe', 'CC Sabathia']);
    const [newPitcher, setNewPitcher] = useState('');

    const handlePitcherNameChange = event => {
        setNewPitcher(event.target.value);
      };
      const handlePitcherSubmit = event => {
        event.preventDefault();
        // spread: give me everything in pitcherList, then add this new thing
        setPitcherList([...pitcherList, newPitcher]);
        setNewPitcher('');
      };
    
return(
<>
<form onSubmit={handlePitcherSubmit}>
        <input
          type="text"
          value={newPitcher}
          onChange={handlePitcherNameChange}
          placeholder="New Pitcher Name"
        />
        <button type="submit">Add Pitcher</button>
      </form>
      <ul>
        {pitcherList.map(pitcher => (
          <li
            key={pitcher} onClick={() => setCurrentPitcher(pitcher)}
          >
            {pitcher}
          </li>
        ))}
      </ul>
      
      </>
      
)

}
export default Pitchers;
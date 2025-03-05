import './App.css';
import './global.css';
import {PieChartParticipation} from './Info.js'
import { Table, Input, Button } from './BasicComponents.js';
import axios from 'axios';
import {useState, useEffect} from 'react';

function App() {
  const [participations, setParticipations] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [participationPct, setParticipationPct] = useState('');

  useEffect(() => {
    console.log('Fetching data...');
    axios.get('http://127.0.0.1:8000/polls/api/participations/')
      .then(response => {
        setParticipations(response.data);
      })
      .catch(error => {
        console.error('Error fecthing: ', error);
      });
  }, []);

  // TODO fazer GET quando houver um pPOST
  const handleSubmit = async (e) => {
    e.preventDefault(); // TODO Pesquisar
    const data = {
      first_name: firstName,
      last_name: lastName,
      participation_pct: parseFloat(participationPct),
    }

    try{
      const response = await axios.post('http://127.0.0.1:8000/polls/api/participations/', data);
      setParticipationPct([...participationPct, response.data]); // TODO entender

      setFirstName('');
      setLastName('');
      setParticipationPct('');
    } catch(error) {
      console.error('Error saving data:', error);
    }
  };

  return (
    <div id="root" className={App}>
      <header className="header">
        <form onSubmit={handleSubmit}>
          <Input 
            placeholder="First name" 
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <Input 
            placeholder="Last name" 
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
          <Input 
            placeholder="Participation" 
            value={participationPct}
            onChange={(e) => setParticipationPct(e.target.value)}
            type="number" 
          />
          <Button name="SEND" type='submit'/>
        </form>
      </header>
      <div className="body">
        <div className="initial-text">
          <h1>
            DATA
          </h1>
          <p>LUANA TATA LUANA TATA LUANA TATA LUANA TATA LUANA TATA</p>
        </div>
        <div className="info">
          <Table participations={participations} />
          <PieChartParticipation participations={participations} />
        </div>
      </div>
    </div>
  );
}

export default App;

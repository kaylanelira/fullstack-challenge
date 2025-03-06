import './App.css';
import './global.css';
import axios from 'axios';
import {useState, useEffect} from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Table from './components/Table';
import PieChartParticipation from './components/PieChart';

function App() {
  const [participations, setParticipations] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [participationPct, setParticipationPct] = useState('');

  const fetchParticipations = async () => {
    try {
      const response = await axios.get('http://127.0.0.1:8000/polls/api/participations/');
      setParticipations(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchParticipations();
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      first_name: firstName,
      last_name: lastName,
      participation_pct: parseFloat(participationPct),
    };

    try {
      await axios.post('http://127.0.0.1:8000/polls/api/participations/', data);
      await fetchParticipations();

      // Resetar campos
      setFirstName('');
      setLastName('');
      setParticipationPct('');
    } catch (error) {
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
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
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

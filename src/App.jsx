import './App.css'
import Bakgrunn from './Components/bakgrunn';
import Button from './Components/Button';

function App() {
  return (
    <div>
      <Bakgrunn />
      <Button obj= {{x: 410, y: 580, teltNum: 3, ledigePlasser: 2, max: 4}}/>
    </div>
  );
}

export default App
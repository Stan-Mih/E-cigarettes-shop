import './App.css';
import {useState} from "react"
import Header from './Header/Header';
import LogInForm from './LogInForm/LogInForm';

function App() {
  const [showLogIn, setShowLogIn] = useState(false);

  return (
    <div className="App">
      <Header showLogIn={showLogIn} setShowLogIn={setShowLogIn} />
      {/*conditional rendering */}
      {showLogIn && <LogInForm/>} 
    </div>
  );
}

export default App;

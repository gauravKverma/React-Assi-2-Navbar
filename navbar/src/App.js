// import logo from './logo.svg';
import './App.css';
import Button from './components/Button';

import Logo from "./components/Logo";

import Links from "./components/Links";


function App() {
  let link=[
    {info:"Services"},
    {info:"Projects"},
    {info:"About"}
]
  return (
    <div className='navbar'>
      <Logo/>
      {link.map((e)=>(
        <Links {...e}/>
      ))}
      <Button/>
    </div>
  );
}

export default App;

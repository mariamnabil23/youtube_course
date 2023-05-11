import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const changehandle = ()=>{
  console.log("hello react ...");
};

const changealert = ()=>{
  alert("hello ..");
};


function App() {

  return (
    <div>
      
      <Contact />
      <Home myname="mariam" myage="22" about="recieve data" myname1="mariam" hisname="fady nabil"/>
      <div>
        <button onClick={changehandle}>click me</button>
        <button onDoubleClick={changealert}>click me double</button>
        <button onClick={()=>{console.log("let's start ..")}}>click me plz</button>
      </div>
      <About />
    </div>
  );
}

export default App;

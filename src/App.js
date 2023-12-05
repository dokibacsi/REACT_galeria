import './App.css';
import { KEPLISTA } from './komponensek/kepLista.js';
import Kep from './komponensek/Kep';
import {useState} from 'react';

function App() {

  const [aktKep, setAktKep]=useState(0);


  function kattintasKezeles(index){
    console.log(index)
    setAktKep(index)
  }


  return (
    <div className="App">
      <header className="App-header">
        <h1>Képgaléria</h1>
      </header>
      <section>
        <Kep src={KEPLISTA[aktKep]} index={aktKep} kattintasKezeles = {kattintasKezeles}/>
      </section>
      <article>
      {KEPLISTA.map((elem, index)=>{
        return (<Kep src={elem} key={index} index = {index} kattintasKezeles = {kattintasKezeles}/>)
      
      })}
      </article>
    </div>
  );
}

export default App;

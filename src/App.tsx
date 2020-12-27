import React from "react";
import logo from "./logo.png";
import "./App.css";
import { Heap } from "./Heap";


function App() {

  const heap = new Heap();
  heap.insert(0);
  heap.insert(10);
  heap.insert(50);
  heap.insert(30);
  heap.insert(70);
  heap.insert(20);
  heap.insert(90);
  
  heap.print();

  heap.heapsort();

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1 style={{
          color: 'black',
          marginTop: '100px'
        }}>Check your console for Priority Queue and Heap ADTS in TypeScript... visit <a href="https://www.gabruism.com">Gabruism</a></h1>
      </header>
    </div>
  );
}

export default App;

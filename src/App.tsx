import React from 'react';
import "./index.css";
import Navbar from './components/Navbar';

function App() {
  return (
    <>
    <Navbar />
    <div className="App flex flex-row items-center justify-evenly h-[100vh] bg-gray-400">
    <h1 className="font-serif text-4xl uppercase font-bold text-purple-800">Hello to my website</h1>
    </div>
    </>
  );
}

export default App;

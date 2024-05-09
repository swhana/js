import React, { useState, useEffect, useRef } from 'react';
import butterfly from './assets/butterfly.gif'
import './App.css';

function App() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  // const [targetX, setTargetX] = useState(0);
  // const [targetY, setTargetY] = useState(0);
  // const requestAnimationRef = useRef(null);

  // const speed = 0.04;

  // const animate = () => {
  //   setTargetX(targetX + ((x - targetX) * speed));
  //   setTargetY(targetY + ((y - targetY) * speed));
  //   requestAnimationRef.current = requestAnimationFrame(animate);
  //   console.log("animating");
  // };

  useEffect(() => {
    window.addEventListener('mousemove', event => {
      setX(event.pageX);
      setY(event.pageY);
    });

    // requestAnimationRef.current = requestAnimationFrame(animate);

    // return () => cancelAnimationFrame(requestAnimationRef.current);
  });


  return (
    <div className="App">
      <header className="App-header">
      </header>
      <h1>{x.toFixed(2)}, {y.toFixed(2)}</h1>
      <div className="box" style={{
        top: y + 'px',
        left: x + 'px',
        borderRadius: '20px',
      }}><img src={butterfly} alt="cursor" width="60px" height="60px"/></div>
    </div>
  );
}

export default App;

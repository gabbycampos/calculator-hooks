import React, { useState } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState('');
  const calcButtons = [];
  [9,8,7,6,5,4,3,2,1,0,".","/",].forEach(item => {
    calcButtons.push(
      <button onClick={e => {
        setData(data + e.target.value)
      }}
      value={item}
      key={item}>
        {item}
      </button>
    )
  })

  return (
    <div className="container">
      <div className="numbers">
        {calcButtons}
      </div>
      <div className="modifiers">
        <button onClick={() => setData(data.substr(0, data.length - 1))}>
          Clear
        </button>
        <button onClick={() => setData("")} value="">
          AC
        </button>
      </div>

      <div className="operations">
       
        <button onClick={e => setData(data + e.target.value)} value="+">
          +
        </button>

       
        <button onClick={e => setData(data + e.target.value)} value="-">
          {" "}
          -{" "}
        </button>

        <button onClick={e => setData(data + e.target.value)} value="*">
          {" "}
          *
        </button>

        <button onClick={e => setData(data + e.target.value)} value="/">
          {" "}
          /
        </button>
  
        <button
          onClick={e => {
            try {
              setData(
                String(eval(data)).length > 3 &&
                  String(eval(data)).includes(".")
                  ? String(eval(data).toFixed(4))
                  : String(eval(data))
              );
            } catch (e) {
              console.log(e);
            }
          }}
          value="="
        >
          =
        </button>

        <div className="show-input">
          {data}
        </div>
        
      </div>
    </div>
  );
}

export default App;

// const data, buttons(empty)
// onClick for all buttons
// setData on onClick buttons
// String constructor for new string object
// toFixed returns 4 after '.'
import React, { useState } from 'react';

const useRecord = (init) => {
  const [current, setCurrent] = useState(init);
  const [prev, setPrev] = useState([]);


  const record = (index) => {
    setPrev((prev) = [...prev, current]);
    setCurrent(index);
  };



  return {
    record,
    current,
  };
};


function App() {
  const { current, record } = useRecord('#FF0000');

  return (
    <>

      <button>undo</button>
      <button>redo</button>
      <input type="color" value={current} onChange={({ target }) => record(target.value)} aria-label="color-picker"/>
      <div style={{ backgroundColor: current, width: '20px', height: '20px' }}></div>
    </>
  );
}

export default App;

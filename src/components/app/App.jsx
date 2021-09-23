import React, { useState, useEffect } from 'react';

const useRecord = (init) => {
  const [current, setCurrent] = useState(init);
  const [colorArray, setColorArray] = useState(init);
  const [index, setIndex] = useState(0);

  useEffect(() => {

  });


  return {
    current,
    colorArray,
    index,
  };
};

function App() {
  const { current } = useRecord('#FF0000');

  return (
    <>

      <button>undo</button>
      <button>redo</button>
      <input type="color" value={current} />
      <div style={{ backgroundColor: current, width: '20px', height: '20px' }}></div>
    </>
  );
}

export default App;

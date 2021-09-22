import React, { useState } from 'react';

const useRecord = (init) => {
  const [current, setCurrent] = useState(init);
  // const [colorArray, setColorArray] = useState(init);
  // const [undo, setUndo] = useState('');
  // const [redo, setRedo] = useState('');

  return {
    current,
  };
};

function App() {
  const { current } = useRecord('#FF0000');

  return (
    <>

      <button onclick={undo}>undo</button>
      <button>redo</button>
      <input type="color" value={current} />
      <div style={{ backgroundColor: current, width: '20px', height: '20px' }}></div>
    </>
  );
}

export default App;

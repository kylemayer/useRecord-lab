import React, { useState, useEffect } from 'react';

const useRecord = (init) => {
  const [pickedColor, setPickedColor] = useState([init]);
  const [colorPlace, setColorPlace] = useState(0);

  const current = pickedColor[colorPlace];

  const record = (val) => {
    setPickedColor(prev => [...prev, val]);
  };

  const undo = () => {
    if(colorPlace > 0){
      setColorPlace(prev => prev - 1);
    }
  };

  const redo = () => {
    if(colorPlace < pickedColor.length - 1){
      setColorPlace(prev => prev + 1);
    }
  };

  useEffect(() => {
    setColorPlace(pickedColor.length - 1);
  }, [pickedColor]);

  return {
    current,
    record,
    undo,
    redo
  };
};


function App() {
  const { current, record, undo, redo } = useRecord('#FF0000');

  return (
    <>

      <button onClick={undo} role="undo">undo</button>
      <button onClick={redo} role="redo">redo</button>
      <input type="color" value={current} onChange={({ target }) => record(target.value)} aria-label="color-picker"/>
      <div style={{ backgroundColor: current, width: '20px', height: '20px' }}></div>
    </>
  );
}

export default App;

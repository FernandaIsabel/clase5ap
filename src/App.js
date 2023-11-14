import React, { useState } from 'react';
import './style.css';

function App () {
  const [colorChanged, setColorChanged] = useState(false);

  function handleButtonClick() {
    setColorChanged(!colorChanged);
  }

  const estiloParrafo = {
    backgroundColor: colorChanged ? 'lightblue': 'white',
    fontSize: colorChanged ? '30px' : '20px',
    fontFamily: colorChanged ? 'Arial' : 'Times New Roman',
    padding: '10px',
  };

  return (
    <div className='container'>
      <p style={estiloParrafo}>Este párrafo cambia su estilo.</p>
      <button onClick={handleButtonClick}>Enviar</button>
    </div>
  );

}

export default App;

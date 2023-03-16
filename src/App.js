import React from 'react';

import TDlayout from './components/TDlayout';
import TDcontext from './TDcontext';
import './App.css';

function App() {
  return (
    <>
      <TDcontext>
        <TDlayout />
      </TDcontext>
    </>
  );
}

export default App;

import './App.css';
import TDlayout from './components/TDlayout';
import TDcontext from './TDcontext';

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

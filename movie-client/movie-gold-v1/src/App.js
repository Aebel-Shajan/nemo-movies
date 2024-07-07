import logo from './logo.svg';
import './App.css';
import Layout from './components/Layout';
import {Routes, Route} from 'react-router-dom'

function App() {
  return (
    <div className="App">
      
      <Routes>
        <Route path="/" element={<Layout/>}>
        
        </Route>
      </Routes>

    </div>
  );
}

export default App;

import Dashboard from './pages/Dashboard';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element= {<Dashboard/>} path="/" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

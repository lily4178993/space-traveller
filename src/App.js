import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Mission from './components/Mission';
import Rockets from './components/Rockets';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/missions"
          element={<Mission />}
        />
        <Route
          path="/rockets"
          element={<Rockets />}
        />
      </Routes>
    </div>
  );
}

export default App;

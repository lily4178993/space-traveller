import { Route, Routes } from 'react-router-dom';
import Header from './components/Header';
import Mission from './components/Mission';
import Rockets from './components/Rockets';
import MyProfile from './components/MyProfile';

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route
          path="/"
          element={<Rockets />}
        />
        <Route
          path="/rockets"
          element={<Rockets />}
        />
        <Route
          path="/missions"
          element={<Mission />}
        />
        <Route
          path="/profile"
          element={<MyProfile />}
        />
      </Routes>
    </div>
  );
}

export default App;

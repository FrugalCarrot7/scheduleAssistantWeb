import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import AuthPage from '../AuthPage/AuthPage';
import TempPage from '../TempPage/TempPage';

export default function App() {
  const [ user, setUser ] = useState(null)

  return (
    <main className="App">
      { user ?
        <Routes>
          <Route path="/temp" element={<TempPage />} />
        </Routes>
        :
        <AuthPage />
      }
    </main>
  );
}

import './App.css';
import { useState } from 'react';
import Dashboard from './dash/Dashboard';
import SignUp from './user-auth/SignUp'

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  while (!loggedIn) {
    return (
      <SignUp />
    )
  }
  return (
    <Dashboard />
  )
}

export default App;

import './App.css';
import { useState } from 'react';
import Dashboard from './dash/Dashboard';
import SignUp from './user-auth/SignUp'
import { AuthProvider } from './user-auth/contexts/AuthContexts'

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

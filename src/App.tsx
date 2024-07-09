// src/App.tsx
import React from 'react';
import Navbar from './components/navbar';
import Body from './components/body';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <Body/>
    </div>
  );
}

export default App;

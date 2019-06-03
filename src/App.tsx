import React from 'react';
import './App.css';
import { InboxScreen } from './components/InboxScreen';
import { ErrorBoundary } from './components/ErrorBoundary';

const App: React.FC = () => {
  return (
    <div className='App'>
      <ErrorBoundary>
        <React.StrictMode>
          <main>
            <InboxScreen />
          </main>
        </React.StrictMode>
      </ErrorBoundary>
    </div>
  );
};

export default App;

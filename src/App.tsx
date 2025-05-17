import React from 'react';
import { Background } from './components/Background';
import { FormContainer } from './components/FormContainer';
import { SubscribeForm } from './components/SubscribeForm';
import ReactGA from 'react-ga4';

import './styles/animations.css';

const GA_TRACKING_ID = import.meta.env.VITE_GA_TRACKING_ID || '';
ReactGA.initialize(GA_TRACKING_ID, {
  gtagOptions: {
    'js': new Date(),
    'config': GA_TRACKING_ID,
  }
});
ReactGA.send('pageview');


function App() {
  return (
    <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <Background />
      <FormContainer>
        <SubscribeForm />
      </FormContainer>
    </div>
  );
}

export default App;
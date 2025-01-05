import React from 'react';
import { Background } from './components/Background';
import { FormContainer } from './components/FormContainer';
import { SubscribeForm } from './components/SubscribeForm';
import './styles/animations.css';

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
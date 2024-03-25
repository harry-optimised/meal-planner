import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import * as Sentry from '@sentry/react';

Sentry.init({
  dsn: 'https://cd2eb58fd21515cfbedd2cc3388ad7f4@o382306.ingest.us.sentry.io/4506972725968896',
  integrations: [
    Sentry.browserTracingIntegration(),
    Sentry.replayIntegration({
      maskAllText: false,
      blockAllMedia: false
    })
  ],
  // Session Replay
  replaysSessionSampleRate: 0.1,
  replaysOnErrorSampleRate: 1.0
});

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// locals
import App from './App';

// ----------------------------------------------------------------------------------------------------

const el = document.getElementById('root');
const root = createRoot(el);

root.render(
  <StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </StrictMode>
);

import { StrictMode } from "react";
import { ThemeProvider } from "next-themes";
import { createRoot } from 'react-dom/client';
import App from './App.tsx';
import './index.css';
import './globals.css';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
      <App />
    </ThemeProvider>
  </StrictMode>
);

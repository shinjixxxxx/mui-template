// main.jsx
import * as React from 'react';
import ReactDOM from 'react-dom/client';
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { theme } from './MUITheme/MUITheme';
import App from './App';
import { NoSsr } from '@mui/material';



ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider
    theme={theme}
    defaultMode="dark"      // ← 起動時は OS の設定を見に行く
    // modeStorageKey={null}         // ← localStorage に保存しない　うまくいかない？
    storageManager={null}         // ← localStorage に保存しない　同期しない
    // disableTransitionOnChange
    noSsr
  >
    <CssBaseline enableColorScheme />
    <App />
  </ThemeProvider>
);

// App.jsx
import * as React from 'react';
import { useColorScheme } from '@mui/material/styles';
import Container from '@mui/material/Container';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import ThemeColorTester from './MUITheme/MUIThemeColorTester';
import Main from './UIParts/Main';

export default function App() {
  const { mode, setMode, systemMode } = useColorScheme();
  console.log("mode:", mode);
  console.log("systemMode:", systemMode);


  // 初回マウント時のみ OS 設定を読んで固定化
  React.useEffect(() => {
    const mql = window.matchMedia('(prefers-color-scheme: dark)');
    setMode(mql.matches ? 'dark' : 'light');
  }, []); // ← 空配列で render 中更新を避ける
  console.log("mode:", mode);


  if (!mode) return null; // 初期化中のチラつき回避（任意）

  return (
    <Container maxWidth="xl" sx={{ py: 3, margin: "0 auto" }}>
      <ThemeColorTester />
      < Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 3,
        }
        }
      >
        <Typography variant="h5" sx={{ fontWeight: 700 }}>
          MUI 基本コンポーネント サンプル
        </Typography>



        {/* カラーモード変更ボタン */}
        <IconButton
          onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')}
          color="primary"
        >
          {mode === 'dark' ? <LightModeIcon /> : <DarkModeIcon />}
        </IconButton>


      </Box >

      <Main />

    </Container>
  );
}

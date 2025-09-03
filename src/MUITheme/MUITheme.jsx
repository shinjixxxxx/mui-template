// MUITheme.jsx
import { createTheme } from '@mui/material/styles';
import { grey,deepOrange } from '@mui/material/colors'


import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';



export const theme = createTheme({
  cssVariables: { colorSchemeSelector: 'class' },

  colorSchemes: {
    light: {
      palette: {
        primary: { main: '#21869c' },
        secondary: { main: '#009688' },
        background: { default: grey[50], paper: '#fff' },
      },
    },
    dark: {
      palette: {
        primary: { main: '#21869c' },
        secondary: { main: '#26a69a' },
        error: { main: deepOrange[400] },
        background: { default: '#0f1115', paper: '#141821' },
        text: { primary: grey[100], secondary: grey[400] },
        divider: 'rgba(255,255,255,0.12)',
      },
    },
  },

  shape: { borderRadius: 8 },
  spacing: 10,/// アイテム間のスペース

  components: {
    MuiGrid: {
      styleOverrides: {
        root: {
          padding: 0,
          margin: 0,
        },
      },
    },
    MuiContainer: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: '10px 10px',
          margin: '10px 0',
          //　border: `1px solid ${theme.palette.primary.main}`, // ★ここが正しい！ テンプレートリテラル
          transition: 'filter 0.2s',
          '&:hover': {
            filter: 'drop-shadow(0 0 5px rgba(25, 118, 210, 0.4))',
          },
        }),
      },
    },

    MuiCssBaseline: {
      styleOverrides: (theme) => ({
        '.border': {
          border: `1px solid ${theme.vars.palette.primary.main}`,
          backgroundColor: theme.vars.palette.background.paper,
        },
      }),
    },

    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: 10,
          // margin: '10px 0',

          // 色は CSS 変数経由で（モードで自動切替）
          border: `1px solid ${theme.vars.palette.primary.main}`,
          backgroundColor: theme.vars.palette.background.paper,

          transition: 'filter 0.2s',
          '&:hover': {
            filter: 'drop-shadow(0 0 5px rgba(33, 134, 156, 0.4))',
          },

          // もしダーク時だけ太さ/効果を変えたい等はここでスコープ
          [theme.getColorSchemeSelector('dark')]: {
            // 例: ダーク時はホバーを少し強める
            '&:hover': {
              filter: 'drop-shadow(0 0 6px rgba(33, 134, 156, 0.7))',
            },
          },
        }),
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: 1,
          margin: '1px 0',
          borderRadius: 5,
        }),
      },
    },
    MuiBox: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: 10,
          margin: '10px 0',
        }),
      },
    },
    // ボタン小型化
    MuiButton: {
      styleOverrides: {
        root: ({ theme }) => ({
          padding: "0 10px",
          margin: '0',
          fontSize: 'small',
        }),
      },
    },
    // フォント設定
    typography: {
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
    },

  },
});

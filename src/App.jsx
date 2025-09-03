// App.jsx
import * as React from 'react';
import { useColorScheme } from '@mui/material/styles';

import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';

import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Switch from '@mui/material/Switch';

import ThemeColorTester from './MUITheme/MUIThemeColorTester';

export default function App() {
  // const { mode, setMode } = useColorScheme();
  const { mode, setMode } = useColorScheme();
  console.log(mode);
  if( mode === "system") { // system の場合強制的に light か dark にセット
    setMode (window.matchMedia('(prefers-color-scheme: dark)').matches ? "dark" : "light")
  }
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    plan: 'free',
    agree: false,
    gender: 'other',
    newsletter: true,
  });

  const handleChange = (key) => (e) => {
    const value =
      e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    setForm((s) => ({ ...s, [key]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // デモ: ここで送信処理
    alert(JSON.stringify(form, null, 2));
  };

  if (!mode) return null; // 初期化中のチラつき回避（任意）

  return (
    <Container maxWidth="xl" sx={{ py: 3 ,margin:"0 auto"}}>
      <ThemeColorTester />
      {/* ヘッダー */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          mb: 3,
        }}
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


      </Box>

      {/* Buttons セクション */}
      <Paper sx={{ p: 2, mb: 3 }} className='border'>Paper
        <Typography variant="h6" sx={{ mb: 2 }}>
          Buttons
        </Typography>
        <Card>
          <Stack direction="row" spacing={1} useFlexGap flexWrap="wrap">
            <Button variant="contained" color="secondary">Contained</Button>
            <Button variant="outlined" color="secondary">
              Outlined
            </Button>
            <Button variant="text" color="secondary">
              Text
            </Button>
            <Button variant="contained" disabled color="secondary">
              Disabled
            </Button>
            <Button variant="contained" size="small" color="secondary">
              Small
            </Button>
            <Button variant="contained" size="large" color="secondary">
              Large
            </Button>
          </Stack>
        </Card>
        
        <Card>
          <Stack direction="row" spacing={2} useFlexGap flexWrap="wrap" >
            <Button variant="contained">Contained</Button>
            <Button variant="outlined">
              Outlined
            </Button>
            <Button variant="text">
              Text
            </Button>
            <Button variant="contained" disabled>
              Disabled
            </Button>
            <Button variant="contained" size="small">
              Small
            </Button>
            <Button variant="contained" size="large">
              Large
            </Button>
          </Stack>
        </Card>
      </Paper>


      {/* Grid + Card セクション */}
      <Box
        sx={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 2,
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <Card key={i} sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6">Card {i}</Typography>
              <Typography variant="body2">横幅可変のカード</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">詳細</Button>
            </CardActions>
          </Card>
        ))}
      </Box>

      <Paper className='border'
        sx={{
          padding: "20px !important",
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
          gap: 2,
          margin: "20px 0",
        }}
      >
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <Card key={i} sx={{ display: 'flex', flexDirection: 'column' }}>
            <CardContent sx={{ flexGrow: 1 }}>
              <Typography variant="h6">Card {i}</Typography>
              <Typography variant="body2">横幅可変のカード</Typography>
            </CardContent>
            <CardActions>
              <Button size="small">詳細</Button>
            </CardActions>
          </Card>
        ))}
      </Paper>




      {/* Form フォーム セクション */}
      <Paper className='border' sx={{ p: 2, mb: 3 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Form
        </Typography>
        <Box component="form" onSubmit={handleSubmit} noValidate>
          <Grid container spacing={2} sx={{width:"100%"}}>
            <Grid xs={12} md={6}>
              <TextField
                fullWidth
                required
                label="お名前"
                value={form.name}
                onChange={handleChange('name')}
                helperText="必須項目です"
              />
            </Grid>
            <Grid xs={12} md={6}>
              <TextField
                fullWidth
                required
                type="email"
                label="メールアドレス"
                value={form.email}
                onChange={handleChange('email')}
              />
            </Grid>

            <Grid xs={12} md={6}>
              <FormControl fullWidth>
                <InputLabel id="plan-label">プラン</InputLabel>
                <Select
                  labelId="plan-label"
                  label="プラン"
                  value={form.plan}
                  onChange={handleChange('plan')}
                >
                  <MenuItem value="free">Free</MenuItem>
                  <MenuItem value="pro">Pro</MenuItem>
                  <MenuItem value="enterprise">Enterprise</MenuItem>
                </Select>
              </FormControl>
            </Grid>

            <Grid xs={12} md={6}>
              <FormControl component="fieldset">
                <Typography variant="subtitle2" sx={{ mb: 1 }}>
                  性別
                </Typography>
                <RadioGroup
                  row
                  value={form.gender}
                  onChange={handleChange('gender')}
                >
                  <FormControlLabel
                    value="male"
                    control={<Radio />}
                    label="男性"
                  />
                  <FormControlLabel
                    value="female"
                    control={<Radio />}
                    label="女性"
                  />
                  <FormControlLabel
                    value="other"
                    control={<Radio />}
                    label="その他"
                  />
                </RadioGroup>
              </FormControl>
            </Grid>
          </Grid>




          <Grid container sx={{width:"100%"}} xl={12} xs={12} sm={12} md={12}>

            <Grid xs={12} md={6}>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={form.agree}
                    onChange={handleChange('agree')}
                  />
                }
                label="利用規約に同意する（必須）"
              />
            </Grid>

            <Grid xs={12} md={6}>
              <FormControlLabel
                control={
                  <Switch
                    checked={form.newsletter}
                    onChange={handleChange('newsletter')}
                  />
                }
                label="ニュースレターを受け取る"
              />
            </Grid>

            <Grid xs={12}>
              <Stack direction="row" spacing={2}>

                <Button type="submit" variant="contained">
                  送信
                </Button>
                <Button
                  type="button"
                  variant="outlined"
                  onClick={() =>
                    setForm({
                      name: '',
                      email: '',
                      plan: 'free',
                      agree: false,
                      gender: 'other',
                      newsletter: true,
                    })
                  }
                >
                  リセット
                </Button>
              </Stack>

            </Grid>
          </Grid>



        </Box>
      </Paper>

      {/* Box（汎用コンテナ）の例 */}
      <Paper className='border' sx={{ p: 2 }}>
        <Typography variant="h6" sx={{ mb: 2 }}>
          Box（汎用コンテナ）
        </Typography>
        <Box className='border'
          sx={(theme) => ({
            p: 2,
            borderRadius: theme.shape.borderRadius,
            // border: `1px dashed ${theme.palette.divider}`,
            display: 'flex',
            gap: 2,
            alignItems: 'center',
            justifyContent: 'space-between',
          })}
        >
          <Typography variant="body2">
            `sx` で柔軟にレイアウトを記述できます。
          </Typography>
          <Button size="small" variant="contained" _color="secondary">
            Action
          </Button>
        </Box>
      </Paper>
    </Container>
  );
}

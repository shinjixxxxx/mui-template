import * as React from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';

// GRID2 //
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
import FormLabel from '@mui/material/FormLabel';
import InputLabel from '@mui/material/InputLabel';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import Switch from '@mui/material/Switch';

export default function Main() {

	// フォーム用
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

	return (
		<>
			{/* Buttons セクション */}
			< Paper sx={{ p: 2, mb: 3 }} spacing={1} className='border' >

				Paper
				< Typography variant="h6" sx={{ mb: 2 }}>
					Buttons
				</Typography >


				{/* ボタン セクション 01 spacing={1} */}
				< Card sx={{ mb: 2 }}>
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
				</Card >


				{/* ボタン セクション 02 spacing={2} */}
				< Card >
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
				</Card >
			</Paper >

			{/* Grid + Card セクション 01 */}
			< Box
				sx={{
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
					gap: 2,
				}}
			>
				{
					[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
						<Card key={i} sx={{ display: 'flex', flexDirection: 'column' }}>
							<CardContent sx={{ flexGrow: 1 }}>
								<Typography variant="h6">Card {i}</Typography>
								<Typography variant="body2">横幅可変のカード</Typography>
							</CardContent>
							<CardActions>
								<Button size="small">詳細</Button>
							</CardActions>
						</Card>
					))
				}
			</Box >

			{/* Grid + Card セクション 02 */}
			< Paper className='border'
				sx={{
					padding: "20px !important",
					display: 'grid',
					gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))',
					gap: 2,
					margin: "20px 0",
				}}
			>
				{
					[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
						<Card key={i} sx={{ display: 'flex', flexDirection: 'column' }}>
							<CardContent sx={{ flexGrow: 1 }}>
								<Typography variant="h6">Card {i}</Typography>
								<Typography variant="body2">横幅可変のカード</Typography>
							</CardContent>
							<CardActions>
								<Button size="small">詳細</Button>
							</CardActions>
						</Card>
					))
				}
			</Paper >



			{/* Form フォーム セクション */}
			< Paper className='border' sx={{ p: 2, mb: 3 }}>
				<Typography variant="h6" sx={{ mb: 2 }}>
					Form
				</Typography>

				<Box component="form" onSubmit={handleSubmit} className='_border' >

					<Grid container spacing={2} sx={{ width: "100%" }} className='_border'>
						<Grid size={{ xs: 12, md: 4 }}>
							<TextField
								fullWidth
								required
								label="お名前"
								value={form.name}
								onChange={handleChange('name')}
								helperText="必須項目です"
							/>
						</Grid>
						<Grid size={{ xs: 12, md: 3 }}>
							<TextField
								fullWidth
								required
								type="email"
								label="メールアドレス"
								value={form.email}
								onChange={handleChange('email')}
							/>
						</Grid>

						<Grid size={{ xs: 12, md: 2 }} >
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



					</Grid>


					<Grid spacing={2} container sx={{ width: "100%", mt: 2 }} >

						<Grid size={{ xs: 6, md: 4 }}>
							<Stack direction="row" alignItems="center" spacing={2} flexWrap="wrap">
								<FormLabel id="gender-label" sx={{ whiteSpace: 'nowrap' }}>
									性別      </FormLabel>

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
							</Stack>
						</Grid>

						<Grid size={{ xs: 6, md: 3 }}>
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

						<Grid size={{ xs: 6, md: 3 }}>
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
					</Grid>


					<Grid size={{ xs: 12, md: 12 }} container
						sx={{
							justifyContent: 'space-between',
						}}
					>
						<Grid size={{ xs: 2, md: 2 }}></Grid>

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
				</Box>
			</Paper >

			{/* Box（汎用コンテナ）の例 */}
			< Paper className='border' sx={{ p: 2 }}>
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
			</Paper >
		</>
	)
}
// MUIStyleWaku.jsx

export const HOVER = {
  transition: 'filter 0.2s',
  '&:hover': {
    filter: 'drop-shadow(0 0 8px rgba(25,118,210,0.8))',
  },
};

export const WAKU = (theme) => {
  return ({
    padding: '2px', // ここはCSS的に効かない場合が多い（後述）
    margin: '0 0 8px', // ここはCSS的に効かない場合が多い（後述）
    border: `1px solid ${theme.palette.primary.main}`,
    color: `${theme.palette.primary.main}`
  })
};
export const SUBTITLE_WAKU2 = (theme) => {
  return {
    fontSize: '0.8em',
    fontWeight: '500',
    padding: 0,
    border: `1px solid ${theme.palette.primary.main}`,
    color: `${theme.palette.primary.main}`,
  };
};

export const SUBTITLE_WAKU22 = (theme) => {
  return {
    fontSize: '0.8em',
    fontWeight: '500',
    padding: 0,
    border: `1px solid ${theme.palette.primary.main}`,
    color: `${theme.palette.primary.main}`,
  };
};


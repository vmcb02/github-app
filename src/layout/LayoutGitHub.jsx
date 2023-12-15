import { Grid } from '@mui/material';

export const LayoutGitHub = ({ children }) => {
  return (
    <Grid
      container
      sx={{
        display: "block",
        width: "100%",
        height: "100vh",
        backgroundColor: "rgb(18, 18, 34)",
      }}
    >
      {children}
    </Grid>
  );
};

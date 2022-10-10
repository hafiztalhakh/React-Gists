import { AppBar, styled, Toolbar, Typography } from "@mui/material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "center",
});

function Header() {
  return (
    <AppBar position="sticky" sx={{ mb: 1 }}>
      <StyledToolbar>
        <Typography variant="h6">Gist Application</Typography>
      </StyledToolbar>
    </AppBar>
  );
}

export default Header;

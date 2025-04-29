import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Link as MuiLink,
} from "@mui/material";

const navItems = [
  { label: "Home", anchor: "#hero" },
  { label: "Skills", anchor: "#skills" },
  { label: "Services", anchor: "#services" },
  { label: "Contact", anchor: "#contact" },
];

export default function Navbar() {
  return (
    <AppBar
      position="sticky"
      sx={{
        backgroundColor: "#0e0e0e",
        borderBottom: "1px solid #333",
        px: 2,
        zIndex: 1300,
      }}
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h6" fontWeight="bold">
          Dale Allen
        </Typography>
        <Box sx={{ display: "flex", gap: 2 }}>
          {navItems.map((item) => (
            <MuiLink
              key={item.anchor}
              href={item.anchor}
              underline="none"
              sx={{
                color: "#fff",
                textTransform: "none",
                fontWeight: 500,
                borderBottom: "2px solid transparent",
                transition: "0.2s ease-in-out",
                "&:hover": {
                  color: "#4EB1B1",
                  borderBottom: "2px solid #4EB1B1",
                },
              }}
            >
              <Button
                sx={{
                  color: "inherit",
                  textTransform: "none",
                  px: 0,
                  minWidth: 0,
                }}
              >
                {item.label}
              </Button>
            </MuiLink>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
}

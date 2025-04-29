import {
  AppBar,
  Toolbar,
  Typography,
  Box,
  Button,
  Link as MuiLink,
  Menu,
  MenuItem,
  IconButton,
  useMediaQuery,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useTheme } from "@mui/material/styles";
import { useState } from "react";

const navItems = [
  { label: "Home", anchor: "#hero" },
  { label: "Skills", anchor: "#skills" },
  { label: "Services", anchor: "#services" },
  { label: "Contact", anchor: "#contact" },
];

export default function Navbar() {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [anchorEl, setAnchorEl] = useState(null);

  const handleOpen = (e) => setAnchorEl(e.currentTarget);
  const handleClose = () => setAnchorEl(null);

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

        {isMobile ? (
          <>
            <IconButton
              edge="end"
              color="inherit"
              onClick={handleOpen}
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              PaperProps={{ sx: { backgroundColor: "#1a1a1a", color: "#fff" } }}
            >
              {navItems.map((item) => (
                <MenuItem key={item.anchor} onClick={handleClose}>
                  <MuiLink
                    href={item.anchor}
                    underline="none"
                    sx={{
                      color: "#fff",
                      textTransform: "none",
                      fontWeight: 500,
                      "&:hover": {
                        color: "#4EB1B1",
                      },
                    }}
                  >
                    {item.label}
                  </MuiLink>
                </MenuItem>
              ))}
            </Menu>
          </>
        ) : (
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
        )}
      </Toolbar>
    </AppBar>
  );
}

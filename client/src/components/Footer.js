// Footer.jsx
import { Box, Typography, Container, Link, Stack } from "@mui/material";

export default function Footer() {
  return (
    <Box sx={{ backgroundColor: "#0e0e0e", color: "#bbb", py: 6 }}>
      <Container maxWidth="lg">
        <Stack
          direction={{ xs: "column", sm: "row" }}
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
        >
          <Typography variant="body2">
            &copy; {new Date().getFullYear()} Dale Allen. All rights reserved.
          </Typography>
          <Stack direction="row" spacing={4}>
            <Link href="#home" color="inherit" underline="hover">
              Home
            </Link>
            <Link href="#services" color="inherit" underline="hover">
              Services
            </Link>
            <Link href="#contact" color="inherit" underline="hover">
              Contact
            </Link>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
}

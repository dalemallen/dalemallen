// HeroPage.jsx
import { Box, Typography, Button, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <Box
      id="hero"
      component={motion.div}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      sx={{
        backgroundColor: "#0e0e0e",
        color: "#ffffff",
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        px: 3,
      }}
    >
      <Container
        maxWidth="xl"
        sx={{
          textAlign: {
            xs: "center", // Center text on extra-small screens
          },
          // paddingBottom: {
          //   xs: "3rem",
          // },
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item size={{ xs: 12, sm: 6 }} order={{ xs: 2, sm: 1 }}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2 }}
            >
              <Typography
                variant="h1"
                fontWeight={700}
                gutterBottom
                sx={{ fontSize: { xs: "2.8rem", md: "3rem" } }}
              >
                I design & build fast, accessible websites.
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 1.2 }}
            >
              <Typography
                variant="h6"
                sx={{ color: "#b0b0b0", mt: 2, maxWidth: "100%" }}
              >
                React developer with 6+ years of experience delivering
                performant interfaces using modern frameworks and design
                systems.
              </Typography>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 1.2 }}
            >
              <Box mt={4}>
                <Button
                  variant="outlined"
                  size="large"
                  sx={{ borderColor: "#ffffff", color: "#ffffff" }}
                  href="#contact"
                >
                  Let's Work Together
                </Button>
              </Box>
            </motion.div>
          </Grid>
          <Grid item size={{ xs: 12, sm: 6 }} order={{ xs: 1, sm: 2 }}>
            <Box
              component="img"
              src="/images/profile.png"
              alt="Dale Allen Visual"
              sx={{ width: "100%" }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

// Hire.jsx
import { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  Button,
  Typography,
  Snackbar,
  Alert,
} from "@mui/material";
import { motion } from "framer-motion";

const Hire = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    location: "",
    jobDescription: "",
    honeypot: "",
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const [loading, setLoading] = useState(false); // 🚀 loading spinner state

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.honeypot) return;

    setLoading(true); // 🚀 Start loading

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, type: "Full-Time Hire" }),
      });

      if (res.ok) {
        setSnackbar({
          open: true,
          message: "Thank you for reaching out!",
          severity: "success",
        });
        setFormData({
          name: "",
          email: "",
          company: "",
          location: "",
          jobDescription: "",
          honeypot: "",
        });

        window.scrollTo({ top: 0, behavior: "smooth" }); // 🚀 Scroll to top
      } else {
        setSnackbar({
          open: true,
          message: "Something went wrong. Please try again.",
          severity: "error",
        });
      }
    } catch (error) {
      console.error(error);
      setSnackbar({
        open: true,
        message: "An error occurred. Try again later.",
        severity: "error",
      });
    } finally {
      setLoading(false); // 🚀 Stop loading
    }
  };

  const handleClose = () => {
    setSnackbar({ ...snackbar, open: false });
  };

  return (
    <Box
      component={motion.form}
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      onSubmit={handleSubmit}
    >
      {/* Top Heading */}
      <Box
        sx={{
          mb: 4,
          display: "flex",
          flexDirection: "column",
          alignItems: { xs: "center", sm: "flex-start" },
          textAlign: { xs: "center", sm: "left" },
          gap: 1,
        }}
      >
        <Typography
          variant="h2"
          fontWeight={900}
          color="primary.main"
          textTransform="uppercase"
          letterSpacing={2}
          sx={{ fontSize: { xs: "2rem", sm: "3rem" } }}
        >
          Hire Me
        </Typography>

        <Typography
          variant="h5"
          fontWeight={600}
          color="text.secondary"
          sx={{ mt: 1 }}
        >
          Ready to Join Forces?
        </Typography>
      </Box>

      {/* Form Fields */}
      <Grid container spacing={3}>
        <Grid item size={{ xs: 12, sm: 6 }}>
          <TextField
            label="Name"
            fullWidth
            variant="outlined"
            value={formData.name}
            onChange={handleChange("name")}
            InputLabelProps={{ style: { color: "#555" } }}
            InputProps={{ style: { color: "#000" } }}
            required
          />
        </Grid>

        <Grid item size={{ xs: 12, sm: 6 }}>
          <TextField
            label="Email"
            fullWidth
            variant="outlined"
            type="email"
            value={formData.email}
            onChange={handleChange("email")}
            InputLabelProps={{ style: { color: "#555" } }}
            InputProps={{ style: { color: "#000" } }}
            required
          />
        </Grid>

        <Grid item size={{ xs: 12, sm: 6 }}>
          <TextField
            label="Company"
            fullWidth
            variant="outlined"
            value={formData.company}
            onChange={handleChange("company")}
            InputLabelProps={{ style: { color: "#555" } }}
            InputProps={{ style: { color: "#000" } }}
            required
          />
        </Grid>

        <Grid item size={{ xs: 12, sm: 6 }}>
          <TextField
            label="Location"
            fullWidth
            variant="outlined"
            value={formData.location}
            onChange={handleChange("location")}
            InputLabelProps={{ style: { color: "#555" } }}
            InputProps={{ style: { color: "#000" } }}
          />
        </Grid>

        <Grid item size={{ xs: 12 }}>
          <TextField
            label="Job Description"
            fullWidth
            multiline
            minRows={4}
            variant="outlined"
            value={formData.jobDescription}
            onChange={handleChange("jobDescription")}
            InputLabelProps={{ style: { color: "#555" } }}
            InputProps={{ style: { color: "#000" } }}
            required
          />
        </Grid>

        {/* Honeypot */}
        <input
          type="text"
          style={{ display: "none" }}
          value={formData.honeypot}
          onChange={handleChange("honeypot")}
        />

        <Grid item size={{ xs: 12 }} textAlign="center">
          <Button
            type="submit"
            variant="contained"
            color="primary"
            disabled={loading}
            sx={{
              px: 6,
              py: 1.5,
              borderRadius: "30px",
              fontWeight: 600,
              fontSize: "1rem",
              textTransform: "none",
              mt: 2,
              "&:hover": {
                backgroundColor: "secondary.main",
                color: "background.default",
              },
            }}
          >
            {loading ? "Sending..." : "Submit"}
          </Button>
        </Grid>
      </Grid>

      {/* Snackbar */}
      <Snackbar
        open={snackbar.open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      >
        <Alert
          onClose={handleClose}
          severity={snackbar.severity}
          sx={{ width: "100%" }}
        >
          {snackbar.message}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default {
  label: "Hire Me",
  value: "fulltime",
  form: <Hire />,
};

// Collab.jsx
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

const Collab = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    idea: "",
    details: "",
    honeypot: "",
  });
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.honeypot) return;

    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, type: "Collaboration" }),
      });

      if (res.ok) {
        setSnackbar({
          open: true,
          message: "Thanks! Excited to hear more!",
          severity: "success",
        });
        setFormData({
          name: "",
          email: "",
          company: "",
          idea: "",
          details: "",
          honeypot: "",
        });
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        setSnackbar({
          open: true,
          message: "Something went wrong. Try again.",
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
      setLoading(false);
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
      {/* Top Section */}
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
          Collaborate
        </Typography>
        <Typography
          variant="h5"
          fontWeight={600}
          color="text.secondary"
          sx={{ mt: 1 }}
        >
          Got an idea? Let's connect.
        </Typography>
      </Box>

      <Grid container spacing={3}>
        {/* Fields */}
        {[
          { label: "Name", field: "name" },
          { label: "Email", field: "email", type: "email" },
          { label: "Company", field: "company" },
          { label: "Collaboration Idea", field: "idea" },
        ].map(({ label, field, type }) => (
          <Grid item size={{ xs: 12 }} key={field}>
            <TextField
              label={label}
              fullWidth
              variant="outlined"
              type={type || "text"}
              value={formData[field]}
              onChange={handleChange(field)}
              InputLabelProps={{ style: { color: "#555" } }}
              InputProps={{ style: { color: "#000" } }}
              required
            />
          </Grid>
        ))}

        <Grid item size={{ xs: 12 }}>
          <TextField
            label="Details"
            fullWidth
            multiline
            minRows={4}
            variant="outlined"
            value={formData.details}
            onChange={handleChange("details")}
            InputLabelProps={{ style: { color: "#555" } }}
            InputProps={{ style: { color: "#000" } }}
            required
          />
        </Grid>

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
  label: "Collaborate",
  value: "collab",
  form: <Collab />,
};

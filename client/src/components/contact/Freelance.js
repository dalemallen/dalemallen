import { useState } from "react";
import {
  Box,
  Grid,
  TextField,
  MenuItem,
  Button,
  Typography,
  CircularProgress,
} from "@mui/material";

const projectTypes = ["Website", "Mobile app", "Other"];
const budgets = ["<$1,000", "$1,000–$5,000", "$5,000–$10,000", "$10,000+"];

const Freelance = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    type: "",
    budget: "",
    details: "",
    honeypot: "",
  });
  console.log("formData: ", formData);
  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setFormData({
          name: "",
          email: "",
          type: "",
          budget: "",
          details: "",
          honeypot: "",
        });
      } else {
        alert("Failed to send. Try again.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong!");
    } finally {
      setLoading(false);
    }
  };

  if (submitted) {
    return (
      <Typography variant="h6" sx={{ mt: 4 }}>
        ✅ Thank you! Your message has been sent.
      </Typography>
    );
  }

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <input
        type="text"
        name="honeypot"
        value={formData.honeypot}
        onChange={handleChange("honeypot")}
        style={{ display: "none" }}
      />

      <Grid container spacing={2}>
        <Grid item size={{ xs: 12, sm: 6 }}>
          <TextField
            label="Name"
            name="name"
            required
            fullWidth
            variant="outlined"
            value={formData.name}
            onChange={handleChange("name")}
          />
        </Grid>
        <Grid item size={{ xs: 12, sm: 6 }}>
          <TextField
            label="Email"
            name="email"
            required
            fullWidth
            type="email"
            variant="outlined"
            value={formData.email}
            onChange={handleChange("email")}
          />
        </Grid>
        <Grid item size={{ xs: 12, sm: 6 }}>
          <TextField
            label="Type of project"
            name="type"
            required
            select
            fullWidth
            variant="outlined"
            value={formData.type}
            onChange={handleChange("type")}
          >
            {projectTypes.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item size={{ xs: 12, sm: 6 }}>
          <TextField
            label="Budget"
            name="budget"
            required
            select
            fullWidth
            variant="outlined"
            value={formData.budget}
            onChange={handleChange("budget")}
          >
            {budgets.map((option) => (
              <MenuItem key={option} value={option}>
                {option}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <Grid item size={{ xs: 12 }}>
          <TextField
            label="Additional details"
            name="details"
            fullWidth
            multiline
            minRows={4}
            variant="outlined"
            value={formData.details}
            onChange={handleChange("details")}
          />
        </Grid>
        <Grid item xs={12} textAlign="center">
          <Button
            type="submit"
            variant="contained"
            disabled={loading}
            sx={{ px: 6, py: 1.5, borderRadius: "30px" }}
          >
            {loading ? (
              <CircularProgress size={24} color="inherit" />
            ) : (
              "Submit"
            )}
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default {
  label: "Freelance Projects",
  value: "freelance",
  form: <Freelance />,
};

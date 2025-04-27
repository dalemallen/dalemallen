// Collab.jsx
import { useState } from "react";
import { Box, Grid, TextField, Button, Typography } from "@mui/material";

const Collab = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    project: "",
    goals: "",
    honeypot: "",
  });

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.honeypot) return; // Honeypot trigger

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...formData, type: "Collaboration" }),
      });

      if (res.ok) {
        alert("Thanks for sharing your idea!");
        setFormData({
          name: "",
          email: "",
          project: "",
          goals: "",
          honeypot: "",
        });
      } else {
        alert("Something went wrong, please try again.");
      }
    } catch (error) {
      console.error(error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Name"
            fullWidth
            variant="outlined"
            value={formData.name}
            onChange={handleChange("name")}
            InputLabelProps={{ style: { color: "#aaa" } }}
            InputProps={{ style: { color: "#fff" } }}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Email"
            fullWidth
            variant="outlined"
            type="email"
            value={formData.email}
            onChange={handleChange("email")}
            InputLabelProps={{ style: { color: "#aaa" } }}
            InputProps={{ style: { color: "#fff" } }}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Project Idea"
            fullWidth
            multiline
            minRows={4}
            variant="outlined"
            value={formData.project}
            onChange={handleChange("project")}
            InputLabelProps={{ style: { color: "#aaa" } }}
            InputProps={{ style: { color: "#fff" } }}
            required
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Goals (Optional)"
            fullWidth
            multiline
            minRows={3}
            variant="outlined"
            value={formData.goals}
            onChange={handleChange("goals")}
            InputLabelProps={{ style: { color: "#aaa" } }}
            InputProps={{ style: { color: "#fff" } }}
          />
        </Grid>
        <input
          type="text"
          style={{ display: "none" }}
          value={formData.honeypot}
          onChange={handleChange("honeypot")}
        />
        <Grid item xs={12} textAlign="center">
          <Button
            type="submit"
            variant="outlined"
            sx={{
              px: 6,
              py: 1.5,
              color: "white",
              borderColor: "white",
              borderRadius: "30px",
            }}
          >
            Submit
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default {
  label: "Collaborate",
  value: "collab",
  form: <Collab />,
};

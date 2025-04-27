// Hire.jsx
import { useState } from "react";
import { Box, Grid, TextField, Button, Typography } from "@mui/material";

const Hire = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    salary: "",
    location: "",
    message: "",
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
        body: JSON.stringify({ ...formData, type: "Full-Time Hire" }),
      });

      if (res.ok) {
        alert("Thank you for reaching out!");
        setFormData({
          name: "",
          email: "",
          salary: "",
          location: "",
          message: "",
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
        <Grid item xs={12} sm={6}>
          <TextField
            label="Salary Expectation"
            fullWidth
            variant="outlined"
            inputMode="numeric"
            value={formData.salary}
            onChange={handleChange("salary")}
            InputLabelProps={{ style: { color: "#aaa" } }}
            InputProps={{ style: { color: "#fff" } }}
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <TextField
            label="Location"
            fullWidth
            variant="outlined"
            value={formData.location}
            onChange={handleChange("location")}
            InputLabelProps={{ style: { color: "#aaa" } }}
            InputProps={{ style: { color: "#fff" } }}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            label="Why you're a great fit"
            fullWidth
            multiline
            minRows={4}
            variant="outlined"
            value={formData.message}
            onChange={handleChange("message")}
            InputLabelProps={{ style: { color: "#aaa" } }}
            InputProps={{ style: { color: "#fff" } }}
            required
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
  label: "Hire Me",
  value: "fulltime",
  form: <Hire />,
};

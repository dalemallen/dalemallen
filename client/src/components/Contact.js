// ContactSection.jsx
import { useState } from "react";
import { Box, Grid, Typography, Button, Stack } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";
import { FiBriefcase, FiClipboard, FiUsers } from "react-icons/fi";
import hire from "./contact/Hire";
import freelance from "./contact/Freelance";
import collab from "./contact/Collab";

const contactOptions = [
  { ...hire, icon: <FiBriefcase size={28} /> },
  { ...freelance, icon: <FiClipboard size={28} /> },
  { ...collab, icon: <FiUsers size={28} /> },
];

export default function ContactSection() {
  const [selected, setSelected] = useState("fulltime");

  const selectedForm = contactOptions.find((o) => o.value === selected);

  const handleSelect = (value) => {
    setSelected(value);
  };

  return (
    <Box
      id="contact"
      sx={{
        py: 2,
        minHeight: "60vh",
        backgroundColor: "#0e0e0e",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Grid
        container
        spacing={4}
        maxWidth="lg"
        margin="auto"
        sx={{
          margin: 2,
        }}
      >
        {/* Left Column: Centered Options */}
        <Grid item size={{ xs: 12, md: 5 }}>
          <Box
            sx={{
              height: "100%",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
            }}
          >
            <Stack spacing={4} alignItems="center">
              {contactOptions.map((option) => (
                <Button
                  key={option.value}
                  onClick={() => handleSelect(option.value)}
                  variant={selected === option.value ? "contained" : "outlined"}
                  color={
                    selected === option.value
                      ? "primary.main"
                      : "secondary.main"
                  }
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    gap: 2,
                    minWidth: 300,
                    padding: 3,
                    borderColor: "#444",
                    color: "#fff",
                    textTransform: "none",
                    backgroundColor:
                      selected === option.value
                        ? "primary.main"
                        : "transparent",
                    "&:hover": {
                      backgroundColor: selected === "secondary.main",
                      borderColor: "#777",
                    },
                  }}
                >
                  {option.icon}
                  <Typography>{option.label}</Typography>
                </Button>
              ))}
            </Stack>
          </Box>
        </Grid>

        {/* Right Column: Animated Form */}
        <Grid item size={{ xs: 12, md: 7 }}>
          <Box
            sx={{
              p: 4,
              backgroundColor: "#FFFFFF",
              borderRadius: 3,
              minHeight: 400,
            }}
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={selected}
                initial={{ y: 100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                exit={{ y: 50, opacity: 0 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <Typography
                  variant="h6"
                  gutterBottom
                  color="black"
                ></Typography>
                {selectedForm.form}
              </motion.div>
            </AnimatePresence>
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}

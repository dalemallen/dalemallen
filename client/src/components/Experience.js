// ExperiencePage.jsx
import { Box, Typography } from "@mui/material";
import { motion } from "framer-motion";

const experiences = [
  {
    title: "Red Label Vacations Inc. (2022–2024)",
    desc: "Led accessibility and responsive design for a global travel site",
  },
  {
    title: "Freelance Developer (2021–Present)",
    desc: "Built React landing pages and custom WordPress features",
  },
  {
    title: "Level • Pixel Bot (2018–2021)",
    desc: "Full Stack contributions with React, Node.js, PHP, CMS platforms",
  },
];

export default function Experience() {
  return (
    <Box
      id="experience"
      component={motion.div}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { staggerChildren: 0.2, duration: 0.8 },
        },
      }}
      sx={{ backgroundColor: "#121212", color: "#fff", py: 6 }}
    >
      <Typography variant="h4" textAlign="center" gutterBottom fontWeight={600}>
        Experience Highlights
      </Typography>
      <Box sx={{ maxWidth: 800, mx: "auto", px: 3 }}>
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 10 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <Box
              sx={{
                border: "1px solid #2c2c2c",
                borderRadius: "10px",
                px: 3,
                py: 2,
                backgroundColor: "#1f1f1f",
                mt: index > 0 ? 3 : 0,
              }}
            >
              <Typography variant="h6" fontWeight={600}>
                {exp.title}
              </Typography>
              <Typography>{exp.desc}</Typography>
            </Box>
          </motion.div>
        ))}
      </Box>
    </Box>
  );
}

// ContactPage.jsx
import { Box, Typography, Container, Grid } from "@mui/material";
import { motion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPhp,
  FaTypo3,
  FaAws,
  FaWordpress,
} from "react-icons/fa";

const skills = [
  { label: "HTML5", icon: FaHtml5, color: "#e44d26" },
  { label: "CSS3", icon: FaCss3Alt, color: "#1572b6" },
  { label: "JavaScript", icon: FaJs, color: "#f0db4f" },
  { label: "React", icon: FaReact, color: "#61dafb" },
  { label: "Node.js", icon: FaNodeJs, color: "#3c873a" },
  { label: "PHP", icon: FaPhp, color: "#8892be" },
  { label: "TypeScript", icon: FaTypo3, color: "#007acc" },
  { label: "AWS", icon: FaAws, color: "#ff9900" },
  { label: "WordPress", icon: FaWordpress, color: "#21759b" },
];

export default function Skills() {
  return (
    <Box id="skills" sx={{ py: 8, backgroundColor: "#0e0e0e", color: "#fff" }}>
      <Container maxWidth="md">
        <Typography
          variant="h4"
          fontWeight={700}
          textAlign="center"
          gutterBottom
        >
          My Tech Stack
        </Typography>
        <Typography
          variant="subtitle1"
          textAlign="center"
          color="#bbb"
          sx={{ mb: 6 }}
        >
          Core technologies I work with
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {skills.map((skill, idx) => {
            const IconComponent = skill.icon;
            return (
              <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={idx}>
                <Box
                  component={motion.div}
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    backgroundColor: "#1f1f1f",
                    textAlign: "center",
                    border: "1px solid #2c2c2c",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: 1,
                    "&:hover .skill-icon": {
                      color: skill.color,
                    },
                  }}
                >
                  <Box
                    className="skill-icon"
                    sx={{
                      fontSize: 48,
                      transition: "color 0.3s ease",
                      color: "#ffffff",
                    }}
                  >
                    <IconComponent />
                  </Box>
                  <Typography variant="subtitle1" fontWeight={500}>
                    {skill.label}
                  </Typography>
                </Box>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}

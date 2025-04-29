// Skills.js
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
    <Box
      id="skills"
      sx={{
        py: 10,
        backgroundColor: "background.default",
        color: "text.primary",
        textAlign: "center",
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" fontWeight={700} mb={2} color="primary.main">
          My Tech Stack
        </Typography>

        <Typography variant="subtitle1" color="text.secondary" mb={8}>
          Core technologies I work with
        </Typography>

        <Grid container spacing={4} justifyContent="center">
          {skills.map((skill, idx) => {
            const IconComponent = skill.icon;
            return (
              <Grid
                item
                size={{ xs: 4, sm: 4, md: 3 }}
                key={idx}
                component={motion.div}
                whileHover={{ scale: 1.08 }}
                transition={{ type: "spring", stiffness: 250 }}
              >
                <Box
                  sx={{
                    p: 3,
                    borderRadius: 3,
                    backgroundColor: "background.paper",
                    border: "1px solid #333",
                    height: "100%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: 1,
                    transition: "background-color 0.3s",
                    "&:hover": {
                      backgroundColor: "#222", // slightly lighter on hover
                    },
                    "& .skill-icon": {
                      fontSize: 48,
                      color: "text.secondary",
                      transition: "color 0.3s ease",
                    },
                    "&:hover .skill-icon": {
                      color: skill.color,
                    },
                  }}
                >
                  <Box className="skill-icon">
                    <IconComponent />
                  </Box>
                  <Typography variant="subtitle1" fontWeight={600}>
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

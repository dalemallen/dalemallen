// ServiceSection.jsx
import { Box, Typography, Grid, Container } from "@mui/material";
import {
  FaSearch,
  FaProjectDiagram,
  FaPalette,
  FaCode,
  FaVial,
  FaHeadset,
  FaUniversalAccess,
  FaLaptopCode,
  FaTabletAlt,
} from "react-icons/fa";

const services = [
  {
    icon: <FaLaptopCode size={28} />,
    title: "Front-End Expertise",
    description:
      "Over 6 years of experience delivering clean, maintainable, and scalable UI solutions using HTML, CSS, JavaScript, and React.",
  },
  {
    icon: <FaTabletAlt size={28} />,
    title: "Web / Mobile Development",
    description:
      "I build responsive websites and mobile-friendly apps focused on delivering seamless user experiences across all devices.",
  },
  {
    icon: <FaSearch size={28} />,
    title: "Performance Audit",
    description:
      "I analyze your site's speed and structure to optimize for fast load times and smooth interaction.",
  },
  {
    icon: <FaProjectDiagram size={28} />,
    title: "Strategic Planning",
    description:
      "We map out a clear development path that aligns with your business goals and growth objectives.",
  },
  {
    icon: <FaPalette size={28} />,
    title: "UI/UX Refinement",
    description:
      "I refine interfaces to ensure intuitive navigation and a visually consistent experience across devices.",
  },
  {
    icon: <FaCode size={28} />,
    title: "Custom Development",
    description:
      "From storefronts to SaaS platforms, I build scalable, responsive websites tailored to your needs.",
  },
  {
    icon: <FaVial size={28} />,
    title: "Quality Assurance",
    description:
      "I ensure everything works flawlessly across browsers and devices through comprehensive testing.",
  },
  {
    icon: <FaUniversalAccess size={28} />,
    title: "Accessibility First",
    description:
      "I follow WCAG standards to make sure your website is usable for everyone, regardless of ability.",
  },
  {
    icon: <FaHeadset size={28} />,
    title: "Continued Support",
    description:
      "Your digital presence evolves. I provide updates, fixes, and enhancements as your business grows.",
  },
];

export default function ServiceSection() {
  return (
    <Box
      id="services"
      sx={{ backgroundColor: "#0e0e0e", color: "#fff", py: 2 }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h4"
          textAlign="center"
          fontWeight={700}
          gutterBottom
        >
          Services Tailored to Your Success
        </Typography>
        <Typography
          variant="subtitle1"
          textAlign="center"
          color="#bbb"
          sx={{ mb: 6 }}
        >
          From strategy to support — everything you need to bring your web
          project to life
        </Typography>

        <Grid container spacing={4}>
          {services.map((service, index) => (
            <Grid item size={{ xs: 12, sm: 6, md: 4 }} key={index}>
              <Grid
                container
                direction="column"
                spacing={2}
                sx={{
                  backgroundColor: "#1a1a1a",
                  borderRadius: 3,
                  p: 4,
                  height: "100%",
                }}
              >
                <Grid item>
                  <Box
                    sx={{
                      backgroundColor: "#2c2c2c",
                      width: 48,
                      height: 48,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      borderRadius: 2,
                      flexShrink: 0,
                    }}
                  >
                    {service.icon}
                  </Box>
                </Grid>
                <Grid item>
                  <Typography variant="h6" fontWeight={600}>
                    {service.title}
                  </Typography>
                </Grid>
                <Grid item>
                  <Typography color="#aaa">{service.description}</Typography>
                </Grid>
              </Grid>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}

import { lazy, Suspense } from "react";
import { CircularProgress, Box } from "@mui/material";

// Lazy-loaded sections

const Navbar = lazy(() => import("./Navbar"));
const Hero = lazy(() => import("./Hero"));
const Skills = lazy(() => import("./Skills"));
const Service = lazy(() => import("./Service"));
const Experience = lazy(() => import("./Experience"));
const Contact = lazy(() => import("./Contact"));
const Footer = lazy(() => import("./Footer"));

function HomePage() {
  return (
    <Suspense
      fallback={
        <Box
          sx={{
            minHeight: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#0e0e0e",
          }}
        >
          <CircularProgress color="secondary" />
        </Box>
      }
    >
      <Navbar />
      <Hero />
      <Skills />
      <Service />
      {/* <Experience /> */}
      <Contact />
      <Footer />
    </Suspense>
  );
}

export default HomePage;

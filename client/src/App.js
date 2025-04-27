import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import { CircularProgress, Box } from "@mui/material";

// Lazy-loaded components
const HomePage = lazy(() => import("./components/Homepage"));

function App() {
  return (
    <>
      <Router>
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
          <Routes>
            <Route path="/" element={<HomePage />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;

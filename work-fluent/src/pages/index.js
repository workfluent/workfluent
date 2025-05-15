import * as React from "react";
import Starfield from "react-starfield";
import Navbar from "../components/Navbar";
import "../components/layout.css"; // Import layout styles
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Zoom from "@mui/material/Zoom";
import SpaceBackground from "../components/SpaceBackground"; // Import the SpaceBackground component

const icon = (
  <Paper sx={{ m: 1, width: 100, height: 100 }} elevation={4}>
    <svg>
      <Box
        component="polygon"
        points="0,100 50,00, 100,100"
        sx={(theme) => ({
          fill: theme.palette.common.white,
          stroke: theme.palette.divider,
          strokeWidth: 1,
        })}
      />
    </svg>
  </Paper>
);

const RowAndColumnSpacing = () => {
  const [isVisible, setIsVisible] = React.useState(false);
  const containerRef = React.useRef(null);

  React.useEffect(() => {
    const handleScroll = () => {
      if (!containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="rowAndColumnSpacing" ref={containerRef}>
      <div className="gridContainer">
        <Zoom in={isVisible}>{icon}</Zoom>
        <Zoom in={isVisible} style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}>
          {icon}
        </Zoom>
        <Zoom in={isVisible} style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}>
          {icon}
        </Zoom>
        <Zoom in={isVisible} style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}>
          {icon}
        </Zoom>
        <Zoom in={isVisible} style={{ transitionDelay: isVisible ? "400ms" : "0ms" }}>
          {icon}
        </Zoom>
        <Zoom in={isVisible} style={{ transitionDelay: isVisible ? "500ms" : "0ms" }}>
          {icon}
        </Zoom>
        <Zoom in={isVisible} style={{ transitionDelay: isVisible ? "600ms" : "0ms" }}>
          {icon}
        </Zoom>
        <Zoom in={isVisible} style={{ transitionDelay: isVisible ? "700ms" : "0ms" }}>
          {icon}
        </Zoom>
      </div>
    </div>
  );
};

const IndexPage = () => {
  const steps = [
    "We analyse your business data",
    "We create solutions",
    "Performance follow-up",
  ]; // Updated steps

  return (
    <div
      style={{
        fontFamily: "Arial, sans-serif",
        position: "relative",
        minHeight: "100vh",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Add the SpaceBackground component */}
      <SpaceBackground />

      {/* Starfield Background */}
      <Starfield
        starCount={1000}
        starColor={[255, 255, 255]}
        speedFactor={0.05}
        backgroundColor="black"
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
          zIndex: -1,
        }}
      />

      {/* Navbar */}
      <Navbar />

      {/* Div1 */}
      <div id="div1" style={{ width: "100%", padding: "20px", color: "#fff", textAlign: "center" }}>
        <div id="divContainer">
          <h1>Drive your business automatic with us here at WorkFluent</h1>
          <p></p>
          <span className="trusted-text">
            Trusted by startups<span className="hidden l:inline"> and enterprises </span> backed by
          </span>
          <span className="trusted-logos"></span>
        </div>
      </div>

      {/* Div2 */}
      <div id="div2" style={{ width: "100%", padding: "20px", color: "#fff", textAlign: "center" }}>
        <h2></h2>
        <p></p>
      </div>

      {/* Div3 */}
      <div id="div3" style={{ width: "100%", padding: "20px", color: "#fff", textAlign: "center" }}>
        <h2></h2>
        <p></p>
        {/* RowAndColumnSpacing Component */}
        <RowAndColumnSpacing />
      </div>

      {/* Div4 */}
      <div id="div4" style={{ width: "100%", padding: "20px", color: "#fff", textAlign: "center" }}>
        <h2></h2>
        <p></p>
        {/* Here goes the form */}
      </div>

      {/* Footer */}
      <footer
        style={{
          padding: "10px 20px",
          backgroundColor: "transparent",
          color: "#fff",
          textAlign: "center",
          marginTop: "auto",
        }}
      >
        <p>&copy; {new Date().getFullYear()} Work Fluent. All rights reserved.</p>
      </footer>
    </div>
  );
};

export const Head = () => (
  <>
    <title>Homepage</title>
    <meta name="description" content="Welcome to the homepage of the Work Fluent project." />
  </>
);

export default IndexPage;


import * as React from "react";
import Starfield from "react-starfield";
import Navbar from "../components/Navbar";
import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

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
        {/* Stepper Component */}
        <div style={{ margin: "20px auto", maxWidth: "600px" }}>
          
          
        </div>
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


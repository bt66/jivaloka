import React from "react";

// assets
import gradient from "./assets/image/gradient.png";
import gradient1 from "./assets/image/gradient1.png";
import gradient2 from "./assets/image/gradient2.png";

import ornam from "./assets/image/ornamen.png";
import ornam1 from "./assets/image/ornamen1.png";
import Footer from "./components/footer/Footer";

// component
import LandingPage from "./pages/landingpage/LandingPage";

function App() {
  return (
    <div className="min-w-[100vw] min-h-full">
      <img src={gradient} className="absolute bg-cover " alt="" />
      <img
        src={gradient1}
        className="absolute bg-cover right-0 top-[11rem]"
        alt=""
      />
      <img src={gradient2} className="absolute bg-cover top-[90rem] " alt="" />
      <img
        src={ornam}
        className="absolute bg-cover w-[50%] right-0 top-[43rem]"
        alt=""
      />
      <img src={ornam1} className="absolute bg-cover top-[110rem]" alt="" />
    
      <LandingPage />
      <Footer />
    </div>
  );
}

export default App;

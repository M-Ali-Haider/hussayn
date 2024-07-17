import "./App.css";
import AboutUsBanner from "./Components/AboutUsBanner/AboutUsBanner";
import AboutUsHeader from "./Components/AboutUsHeader/AboutUsHeader";
import HowDidItStart from "./Components/HowDidItStart/HowDidItStart";
import WhatDoWeDo from "./Components/WhatDoWeDo/WhatDoWeDo";

function App() {
  return (
    <div className="App">
      <AboutUsBanner />
      <HowDidItStart />
      <WhatDoWeDo />
      <AboutUsHeader />
    </div>
  );
}

export default App;

import "./App.css";
import Banner from "./Header/Banner";
import Navigation from "./Header/Navigation";
import SpecialSection from "./SpecialSection/SpecialSection";

function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <Banner></Banner>
      <SpecialSection></SpecialSection>
    </div>
  );
}

export default App;

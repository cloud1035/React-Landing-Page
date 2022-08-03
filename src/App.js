import "./styles.css";
import HeroSection from "./HeroSection";
import ServiceSection from "./ServicesSection";
import FooterSection from "./FooterSection";
export default function App() {
  return (
    <div className="App">
      <HeroSection />
      <ServiceSection />
      <FooterSection />
    </div>
  );
}

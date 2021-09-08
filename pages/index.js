import styles from "../styles/Home.module.css";
import HeroSection from "../component/heroSection/HeroSection";
import ServiceSection from "../component/ServiceSection/ServiceSection";
import RegisterSection from "../component/RegisterSection/RegisterSection";
import ReviewSection from "../component/ReviewSection/ReviewSection";
import Footer from "../component/Footer/Footer";
import RegisterSectionSmall from "../component/RegisterSection/RegisterSectionSmall";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServiceSection />
      <RegisterSection />
      {/* <RegisterSectionSmall /> */}
      <ReviewSection />
      <Footer />
    </>
  );
}

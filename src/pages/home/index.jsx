import {
  Footer,
  Hero,
  Keyfeatures,
  Navbar,
  // Proplan,
  Testimonial,
  TopFeatures,
} from "../../components";
import { Explore } from "../../components/landingPage/explore";

export const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      {/* <Proplan /> */}
      <Explore />
      <TopFeatures />
      <Keyfeatures />
      <Testimonial />
      <Footer />
    </div>
  );
};

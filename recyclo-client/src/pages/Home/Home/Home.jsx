import { Helmet } from "react-helmet-async";
import Featured from "../Featured/Featured";
import PopularService from "../PopularService/PopularService";
import Testimonials from "../Testimonials/Testimonials";
import HeroBanner from "../HeroBanner/HeroBanner";
import HeroBannerService from "../HeroBannerService/HeroBannerService";
import TopCategory from "../TopCategory/TopCategory";
import Newsletter from "../Newsletter/Newsletter";
import InstagramPostSection from "../InstagramPostSection/InstagramPostSection";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Recyclo | Home</title>
      </Helmet>
      <HeroBanner />
      <HeroBannerService />
      <TopCategory />
      <PopularService />
      <Featured />
      <Testimonials />
      <InstagramPostSection />
      <Newsletter />
    </div>
  );
};

export default Home;

import { bannerImage } from "../../images";
import "./banner.css"

const Banner = () => {
  return (
    <section className="banner-section">
      <div className="banner-content flex-column align-center text-center">
          <img alt="" src={bannerImage} />
          <h1>All your files in one secure location, accessible anywhere.</h1>
          <p className="banner-text">
            Fylo stores all your most important files in one secure location. Access
            them wherever you need, share and collaborate with friends, family, and
            co-workers.
          </p>
          <button className="banner-btn fw-700">Get Started</button>
      </div>
    </section>
  );
};

export default Banner;

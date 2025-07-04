import { Parallax } from "react-parallax";

const Cover = ({ img, title }) => {
  return (
    <div className="rounded-xl overflow-hidden">
      <Parallax
        blur={{ min: -50, max: 50 }}
        bgImage={img}
        bgImageAlt="the service"
        strength={-200}
      >
        <div className="hero h-[400px]">
          <div className="hero-overlay bg-opacity-60"></div>
          <div className="hero-content text-center text-neutral-content">
            <div className="max-w-lg">
              <h1 className="mb-5 text-5xl font-bold uppercase">{title}</h1>
              <p className="mb-5">
                We provide eco-friendly recycling solutions for paper, plastic,
                metal, textiles, electronics, and glass - helping communities
                reduce waste and promote sustainability.
              </p>
            </div>
          </div>
        </div>
      </Parallax>
    </div>
  );
};

export default Cover;

import heroImage from "../assets/images/illustration-working.svg";
import LinkShortner from "./LinkShortner";

const Hero = () => {
  return (
    <div>
      <div className="flex items-center justify-center gap-10 md:px-36 py-20">
        <div className="w-1/2 flex flex-col space-y-5">
          <div className="space-y-2">
            <h1 className="text-6xl font-bold leading-tight">
              More than just shorter links.
            </h1>
            <p>
              Build your brand's recognition and get detailed insights on how
              your links are performing.
            </p>
          </div>
          <button className="bg-primary-cyan px-3 py-2 text-white w-1/4 rounded-full">
            Get Started
          </button>
        </div>
        <div className="w-1/2 flex flex-col items-center justify-center">
          <img src={heroImage} alt="" />
        </div>
      </div>
      <div className="relative top-16">
        <LinkShortner />
      </div>
    </div>
  );
};

export default Hero;

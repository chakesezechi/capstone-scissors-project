import '../assets/css/style.css';
import '../styles/Hero.css'
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center py-44 hero">
    <div className="">
      <h1 className="text-center text-[48px] font-semibold">
        Optimize Your Online Experience with Our
      </h1>
      <h1 className="text-center text-[48px] font-semibold">
        Advanced <span className="text-[#005AE2]">URL Shortening</span>{' '}
        Solution
      </h1>
    </div>
    <div className="mt-10 sub-text-container">
      <p className="text-center font-medium text-[18px] leading-relaxed hero-subtext">
        Personalize your shortened URLs to align with your brand identity.
        Utilize custom slugs,
        branded links, and domain customization options to reinforce your
        brand presence and
        enhance user engagement.
      </p>
    </div>
    <div className=" mt-20 flex justify-between gap-3">
      <button className="rounded-full bg-[#005AE2] text-white text-xl font-semibold py-2 px-6">
        <Link to={"/signup"}> Sign Up </Link>
      </button>
      <button className="rounded-full bg-none text-[#005AE2] text-xl font-semibold hover:border hover:border-[#005AE2] py-1 px-6">
        Learn More
      </button>
    </div>
    
  </div>
  );
};

export default Hero;

import tick from "../../../assets/tick.png";
import icon1 from "../../../assets/icon1.png";
import icon2 from "../../../assets/icon2.png";
import icon3 from "../../../assets/icon3.png";
import Header from "./Header";
import Companies from "./Companies";
import About from "./About";
import Testimonial from "./Testimonial";
import OurApp from "./OurApp";
const Home = () => {
  return (
    <>
      <Header />
      <div className="flex flex-col mx-auto  my-24 justify-center  items-center">
        <h2 className="my-4 ">Manage Your Waste</h2>
        <div className=" font-bold text-center text-md md:text-4xl">Quick & easy Waste Management</div>
        {/* Manage Waste */}
        <div className="block  md:flex justify-center   md:px-64 px-2 my-8 items-center">
          <div className="flex flex-col items-center justify-center">
            <span className="my-2">
              {" "}
              <img className="md:w-14 w-10" src={icon1} alt="icon1" />
            </span>
            <h2 className="font-bold text-center">Search Location</h2>
            <p className="font-lighter  text-center text-sm my-5 text-dark2">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="my-2">
              {" "}
              <img className="md:w-14 w-10"  src={icon3} alt="icon1" />
            </span>
            <h2 className="font-bold text-center">Select Date & Time</h2>
            <p className="font-lighter text-center text-sm my-5 text-dark2">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium.
            </p>
          </div>
          <div className="flex flex-col items-center justify-center">
            <span className="my-2">
              {" "}
              <img className="md:w-14 w-10"  src={icon2} alt="icon1" />
            </span>
            <h2 className="font-bold text-center">Pick up</h2>
            <p className="font-lighter text-center text-sm my-5 text-dark2">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium.
            </p>
          </div>
        </div>

        {/* Companies */}

        <Companies />

        {/* About Us */}
        <div className="md:px-64 px-4 text-start py-24">
          <About />
        </div>
      </div>
      <div className="tractor-bg flex flex-col items-center justify-center  py-16">
        {/* <h1>hello</h1> */}
        <p className="text-white text-center text-4xl">
          Let pick your waste at <br /> your door step
        </p>
        <button className="w-52 flex items-center justify-center bg-primary rounded-md my-2 py-2 text-white">
          Schedule a pickup{" "}
          <span className="ml-1">
            <img src={tick} alt="tick" />
          </span>
        </button>
      </div>
      <div className="md:px-64 px-4 text-start py-24">
        <Testimonial />
      </div>
      <div
        style={{ background: " rgba(60, 170, 53, 0.1" }}
        className="md:px-64 px-4 text-start pt-24"
      >
        <OurApp />
      </div>
    </>
  );
};

export default Home;
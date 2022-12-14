import AboutImage from "../../../assets/About.png";
import car from "../../../assets/car.png";
import building from "../../../assets/buildings.png";
import shop from "../../../assets/shop.png";
import dot from "../../../assets/dot.png";
import { motion } from "framer-motion";
const About = () => {
  return (
    <>
      <div className="md:flex block">
        <motion.div
          initial={{
            opacity: 0,
            transform: "translateX(-20rem)",
          }}
          whileInView={{
            opacity: 1,
            transform: " translateX(0rem)",
          }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="img w-auto relative"
        >
          <img src={AboutImage} className="w-auto" alt="about" />
          <span
            style={{ bottom: "2rem", left: "-3rem", zIndex: "-3" }}
            className="absolute "
          >
            <img src={dot} alt="dot" />
          </span>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            transform: "translateX(20rem)",
          }}
          whileInView={{
            opacity: 1,
            transform: " translateX(0rem)",
          }}
          viewport={{ once: false }}
          transition={{ duration: 1 }}
          className="img w-auto relative"
          className="about-text flex max-w-sm  mx-5 justify-between flex-col"
        >
          <h3 className="text-secondary md:my-0 my-3">About Us</h3>
          <p className="text-3xl font-bold">
            we make thing smart for you with tech.
          </p>
          <p className="text-gray-500 text-sm">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Platea
            risus elit pellentesque nec sed vel proin rutrum orci. Lobortis nunc
            varius massa convallis. Id in feugiat lobortis amet, quisque et ut
            vestibulum, aenean. Ultrices risus netus donec arcu. Pellentesque
            mauris id volutpat quam sodales nunc turpis interdum donec. Viverra
            nulla morbi
          </p>
          <div className="shadow-md p-5 rounded-md my-2">
            <h4 className="text-xl text-dark1 flex  items-center font-medium">
              <span className="mr-2">
                <img src={car} alt="car" />{" "}
              </span>{" "}
              20 Company
            </h4>
          </div>
          <div className="shadow-md p-5 rounded-md my-2">
            <h4 className="text-xl text-dark1 font-medium flex items-center">
              <span className="mr-2">
                <img src={building} alt="building" />{" "}
              </span>{" "}
              100 User
            </h4>
          </div>
          <div className="shadow-md p-5 rounded-md my-2">
            <h4 className="text-xl text-dark1 font-medium flex items-center">
              <span className="mr-2">
                <img src={shop} alt="shop" />{" "}
              </span>{" "}
              150 State Cover
            </h4>
          </div>
        </motion.div>
      </div>
    </>
  );
};
export default About;

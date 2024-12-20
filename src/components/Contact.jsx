import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";
import PropTypes from "prop-types";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <div id="contact" className="my-20 min-h-96 w-screen  px-10">
      <div className="relative rounded-lg bg-black py-24 text-blue-50 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/image/zombie.jpg"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="/image/female.jpg"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="absolute -top-40 sm:hidden md:block left-20 w-60 sm:top-10 md:left-auto md:right-10 lg:top-40 lg:w-[300px]">
          
          <ImageClipBox
            src="/image/helmet.jpg"
            clipClass="sword-man-clip-path md:scale-125"
          />
        </div>

        <div className="flex flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            Join PUBG Now
          </p>

          <AnimatedTitle
            title="let&#39;s pl<b>a</b>y with <br /> your friends  <br /> to<b>ge</b>ther <b>to</b>gether."
            className="special-font !md:text-[6.2rem] w-full font-zentry !text-5xl !font-black !leading-[.9]"
          />

          <Button title="play now" containerClass="mt-10 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

ImageClipBox.propTypes = {
    src: PropTypes.string.isRequired,
    clipClass: PropTypes.string.isRequired

};

ImageClipBox.defaultProps = {
    src: '',
    clipClass: ''

}


export default Contact;

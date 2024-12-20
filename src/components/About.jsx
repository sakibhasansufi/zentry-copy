import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import AnimatedTitle from "./AnimatedTitle";


gsap.registerPlugin(ScrollTrigger);

const About = () => {
  useGSAP(() => {
    const clipAnimation = gsap.timeline({
      scrollTrigger: {
        trigger: "#clip",
        start: "center center",
        end: "+=800 center",
        scrub: 0.5,
        pin: true,
        pinSpacing: true,
      },
    });

    clipAnimation.to(".mask-clip-path", {
      width: "100vw",
      height: "100vh",
      borderRadius: 0,
    });
  });

  return (
    <div id="about" className="min-h-screen w-screen ">
      <div className="relative mb-8 mt-36 flex flex-col items-center gap-5">
        <p className="font-general text-sm uppercase md:text-[10px]">
          Welcome to PUBG
        </p>

        <AnimatedTitle
          title="Pl<b>a</a>y the most intense multiplayer <br /> battles on your mobile phone"
          containerClass="mt-5 !text-black text-center"
        />

        <div className="about-subtext">
          <p>The Game of Multiplayer Battleground Game Begins</p>
          <p className="text-gray-500">
          PUBG: BATTLEGROUNDS is a battle royale that pits 100 players against each other. Outplay your opponents to become the lone survivor. Play free now!
          </p>
        </div>
      </div>

      <div className="h-dvh w-screen" id="clip">
        <div className="mask-clip-path about-image">
          <img
            src="image/join.jpg"
            alt="Background"
            className="absolute left-0 top-0 size-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
    </div>
  );
};

export default About;

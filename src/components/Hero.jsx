import { useEffect, useRef } from "react";
import { useState } from "react";
import { TiLocationArrow } from "react-icons/ti";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/all";
import gsap from "gsap";
import Button from "./Button";
gsap.registerPlugin(ScrollTrigger);
const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [loading, setLoading] = useState(false);
    const [loadedVideo, setLoadedVideo] = useState(0);

    const totalVideos = 4;
    const nextVideoRef = useRef(null);

    const upcomingVideoIndex = (currentIndex % totalVideos) + 1;
    const handleMiniVideoPlayer = () => {
        setHasClicked(true);
        setCurrentIndex(upcomingVideoIndex);
    }

    const handleVideoLoaded = () => {
        setLoadedVideo((prevLoadedVideo) => prevLoadedVideo + 1);
    };


    useEffect(() => {
        if (loadedVideo === totalVideos - 1) {
            setLoading(false)
        }
    }, [loadedVideo])

    useGSAP(
        () => {
            if (hasClicked) {
                gsap.set("#next-video", { visibility: "visible" });
                gsap.to("#next-video", {
                    transformOrigin: "center center",
                    scale: 1,
                    width: "100%",
                    height: "100%",
                    duration: 1,
                    ease: "power1.inOut",
                    onStart: () => nextVideoRef.current.play(),
                });
                gsap.from("#current-video", {
                    transformOrigin: "center center",
                    scale: 0,
                    duration: 1.5,
                    ease: "power1.inOut",
                });
            }
        },
        {
            dependencies: [currentIndex],
            revertOnUpdate: true,
        }
    );

    useGSAP(() => {
        gsap.set("#video-frame", {
            clipPath: "polygon(14% 0%, 72% 0%, 88% 90%, 0% 95%)",
            borderRadius: "0% 0% 40% 10%"
        });
        gsap.from("#video-frame", {
            clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
            borderRadius: "0% 0% 0% 0%",
            ease: "power1.inOut",
            scrollTrigger: {
                trigger: "#video-frame",
                start: "center center",
                end: "bottom center",
                scrub: true,
            }
        })
    })

    const getVideoSrc = (index) => {
        return `/video/pubg-${index}.mp4`;
    };

    return (
        <div className='relative h-dvh w-screen overflow-x-hidden'>
            {
                loading && (
                    <div className="flex-center absolute z-[100] h-dvh w-screen overflow-hidden bg-violet-50">
                        <div className="three-body">
                            <div className="three-body__dot"></div>
                            <div className="three-body__dot"></div>
                            <div className="three-body__dot"></div>
                        </div>
                    </div>
                )
            }
            <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
                <div>
                    <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                        <div onClick={handleMiniVideoPlayer} className="origin-center scale-150 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100">
                            <video
                                ref={nextVideoRef}
                                src={getVideoSrc(upcomingVideoIndex)}
                                loop
                                muted
                                id="current-video"
                                className="size-64 origin-center scale-150 object-cover object-center"
                                onLoadedData={handleVideoLoaded}
                            />
                        </div>
                    </div>
                    <video
                        ref={nextVideoRef}
                        src={getVideoSrc(currentIndex)}
                        loop
                        muted
                        id="next-video"
                        className="absolute-center invisible absolute z-20 size-64 object-cover object-center"
                        onLoadedData={handleVideoLoaded}
                    />
                    <video
                        src={getVideoSrc(currentIndex === totalVideos - 1 ? 1 : currentIndex + 1)}
                        autoPlay
                        loop
                        muted
                        className="absolute top-0 left-0 size-full object-cover object-center"
                        onLoadedData={handleVideoLoaded}

                    />
                </div>
                <h1 className="special-font hero-heading absolute bottom-5 right-5 z-40 text-blue-75">
                    M<b>O</b>BILE
                </h1>
                <div className="absolute left-0 top-0 z-40 size-full">
                    <div className="mt-24 px-5 sm:px-10">
                        <h1 className="special-font hero-heading text-blue-100">
                            p<b>u</b>bg
                        </h1>

                        <p className="mb-5 max-w-64 font-robert-regular text-blue-100">
                            Enter the Multiplayer Battle Game
                        </p>

                        <a href="https://www.youtube.com/watch?v=0VJIR35soVk" target="_blank" rel="noreferrer">
                            <Button
                                id="watch-trailer"
                                title="Watch trailer"
                                leftIcon={<TiLocationArrow />}
                                containerClass="bg-yellow-300 flex-center gap-1"
                            /></a>
                    </div>
                </div>
            </div>
            <h1 className="special-font hero-heading absolute bottom-5 right-5 text-black">
                M<b>O</b>BILE
            </h1>
        </div>
    );
};

export default Hero;
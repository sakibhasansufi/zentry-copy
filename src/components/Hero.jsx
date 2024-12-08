import { useRef } from "react";
import { useState } from "react";

const Hero = () => {
    const [currentIndex, setCurrentIndex] = useState(1);
    const [hasClicked, setHasClicked] = useState(false);
    const [loading, setLoading] = useState(true);
    const [loadedVideo, setLoadedVideo] = useState(0);

    const totalVideos = 3;
    const nextVideoRef = useRef(null);

    const upcomingVideoIndex = (currentIndex % totalVideos) + 1;
    const handleMiniVideoPlayer = () => {
        setHasClicked(true);
        setCurrentIndex(upcomingVideoIndex);
    }

    const handleVideoLoaded = () => {
        setLoadedVideo((prevLoadedVideo) => prevLoadedVideo + 1);
    };

    const getVideoSrc = (index) => {
        return `/video/hero-${index}.mp4`;
    };

    return (
        <div className='relative h-dvh w-screen overflow-x-hidden'>
            <div id="video-frame" className="relative z-10 h-dvh w-screen overflow-hidden rounded-lg bg-blue-75">
                <div>
                    <div className="mask-clip-path absolute-center absolute z-50 size-64 cursor-pointer overflow-hidden rounded-lg">
                        <div onClick={handleMiniVideoPlayer} className="origin-center scale-150 opacity-0 transition-all duration-500 ease-in hover:scale-100 hover:opacity-100">
                            <video
                                ref={nextVideoRef}
                                src={getVideoSrc(currentIndex + 1)}
                                loop
                                muted
                                id="current-video"
                                className="size-64 origin-center scale-150 object-cover object-center"
                                onLoadedData={handleVideoLoaded}
                            />
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Hero;
import PropTypes from "prop-types";
import { useRef, useState } from "react";
import { TiLocationArrow } from "react-icons/ti";



export const Bentotilt = ({ children, className = '' }) => {
    const [transformStyle, setTransformStyle] = useState("");
    const itemRef = useRef(null);

    const handleMouseMove = (e) => {
        if (!itemRef.current) return;

        const { left, top, width, height } = itemRef.current.getBoundingClientRect();

        const relativeX = (e.clientX - left) / width;
        const relativeY = (e.clientY - top) / height;

        const tiltX = (relativeY - 0.5) * 10;
        const tiltY = (relativeX - 0.5) * -10;
        const newTransform = `perspective(700px) rotateX(${tiltX}deg) rotateY(${tiltY}deg) scale3d(.90, .95, .95)`;
        setTransformStyle(newTransform);
    };

    const handleMouseLeave = () => {
        setTransformStyle('');
    }
    return (
        <div ref={itemRef}
            className={className}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
            style={{ transform: transformStyle }}>
            {children}
        </div>
    )

};



export const BentoCard = ({ src, title, description }) => {
    return (
        <div className="relative size-full">
            <video
                src={src}
                loop
                muted
                autoPlay
                className="absolute left-0 top-0 size-full object-cover object-center"
            />
            <div className="relative z-10 flex size-full flex-col justify-between p-5 text-blue-50">
                <div>
                    <h1 className="bento-title special-font">{title}</h1>
                    {description && (
                        <p className="mt-3 max-w-64 text-xs md:text-base text-justify text-gray-400">{description}</p>
                    )}
                </div>
            </div>
        </div>
    )
};

const Features = () => {
    return (
        <section className="bg-black pb-52">
            <div className="container mx-auto px-3 md:px-10">
                <div className="px-5 py-32">
                    <p className="font-circular-web text-lg text-blue-50">
                        Into the Multiplayer Battle Game
                    </p>
                    <p className="max-w-md font-circular-web text-lg text-blue-50 opacity-50">
                        Whether you&apos;re a seasoned pro or a newcomer to the battle royale genre, PUBG offers an unforgettable gaming experience.
                    </p>
                </div>

                <Bentotilt className="border-hsla relative mb-7 h-96 w-full overflow-hidden rounded-md md:h-[65vh]">
                    <BentoCard
                        src="video/vid-1.mp4"
                        title={
                            <>
                                p<b>u</b>bg
                            </>
                        }
                        description="PUBG Mobile[a] is a free-to-play battle royale video game co-developed by LightSpeed & Quantum Studio and PUBG Studios. It is a mobile game adaptation of PUBG: Battlegrounds"


                    />
                </Bentotilt>


                <div className="grid h-[120vh] w-full grid-cols-2 grid-rows-3 gap-7">
                    <Bentotilt className="bento-tilt_1 row-span-1 md:col-span-1 md:row-span-2">
                        <BentoCard
                            src="video/feature-1.mp4"
                            title={
                                <>
                                    dra<b>c</b>ula
                                </>
                            }
                            description="Immerse yourself in the legendary war that ruined the landscape. The world versus an evil entity that strikes fear into every living being, Dracula."

                        />
                    </Bentotilt>


                    <Bentotilt className="bento-tilt_1 row-span-1 ms-32 md:col-span-1 md:ms-0">
                        <BentoCard
                            src="video/feature-2.mp4"
                            title={
                                <>
                                    ph<b>a</b>r<b>a</b>oh
                                </>
                            }
                            description="The story of the Ancient Secret continues with Pharaoh and Iridescence joining the fray! "

                        />
                    </Bentotilt>


                    <Bentotilt className="bento-tilt_1 me-14 md:col-span-1 md:me-0">
                        <BentoCard
                            src="video/feature-3.mp4"
                            title={
                                <>
                                    a<b>n</b>na
                                </>
                            }
                            description="Anna is primarily cosmetic, offering unique appearances and voice lines without affecting game play mechanics."
                            isComingSoon
                        />
                    </Bentotilt>


                    <div className="bento-tilt_2">
                        <div className="flex size-full flex-col justify-between bg-[#30ce1a] p-5">
                            <h1 className="bento-title special-font max-w-64 text-black">
                                M<b>o</b>re co<b>m</b>ing s<b>o</b>on.
                            </h1>
                            <TiLocationArrow className="m-5 scale-[5] self-end" />
                        </div>
                    </div>


                    <div className="bento-tilt_2">
                        <video
                            src="video/feature-4.mp4"
                            loop
                            muted
                            autoPlay
                            className="size-full object-cover object-center"
                        />
                    </div>
                </div>
                <div>

                </div>

            </div>
        </section>
    );
};

BentoCard.propTypes = {
    src: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    isComingSoon: PropTypes.bool.isRequired

};

BentoCard.defaultProps = {
    src: '',
    title: '',
    description: '',
    isComingSoon: true
};


Bentotilt.propTypes = {
    children: PropTypes.node.isRequired,
    className: PropTypes.string
};

Bentotilt.defaultProps = {
    children: '',
    className: ''
}

export default Features;
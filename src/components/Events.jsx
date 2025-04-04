import { studentEvents, facultyEvents } from "../constants";
import { Carousel, IconButton } from "@material-tailwind/react";
import { curve } from "../assets";
import Heading from "./Heading";
import Section from "./Section";
import Button from "./Button";
import { hackathonImage } from "../assets";
import Arrow from "../assets/svg/Arrow";
import { GradientLight } from "./design/Benefits";
import ClipPath from "../assets/svg/ClipPath";
import Countdown from "./Countdown/Countdown";
import MobileCountdown from "./Countdown/MobileCountdown";
const Benefits = () => {
  return (
    <Section>
      <div className="hidden 2xl:block mt-4 mb-24">
        <Countdown />
      </div>
      <div className="2xl:hidden mt-8 mb-24">
        <MobileCountdown />
      </div>

      <div className="container relative z-2">
        {/* <Heading className="md:max-w-md lg:max-w-2xl" title="Events" />
        <div
          className="image-carousel-container h-svh mb-20"
          style={{
            maxHeight: "32.5em",
          }}
        >
          <Carousel
            className="rounded-xl"
            prevArrow={({ handlePrev }) => (
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handlePrev}
                className="!absolute top-2/4 left-4 -translate-y-2/4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                  />
                </svg>
              </IconButton>
            )}
            nextArrow={({ handleNext }) => (
              <IconButton
                variant="text"
                color="white"
                size="lg"
                onClick={handleNext}
                className="!absolute top-2/4 !right-4 -translate-y-2/4"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="h-6 w-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                  />
                </svg>
              </IconButton>
            )}
            navigation={({ setActiveIndex, activeIndex, length }) => (
              <div id="events" className="absolute bottom-4 left-2/4 z-50 flex -translate-x-2/4 gap-2">
                {new Array(length).fill("").map((_, i) => (
                  <span
                    key={i}
                    className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                      activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                    }`}
                    onClick={() => setActiveIndex(i)}
                  />
                ))}
              </div>
            )}
          >
            <img
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
              alt="image 2"
              className="h-full w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
              alt="image 3"
              className="h-full w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1497436072909-60f360e1d4b1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2560&q=80"
              alt="image 1"
              className="h-full w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80"
              alt="image 2"
              className="h-full w-full object-cover"
            />
            <img
              src="https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80"
              alt="image 3"
              className="h-full w-full object-cover"
            />
          </Carousel>
        </div> */}
        <Heading className="md:max-w-md lg:max-w-2xl" title="Student Events" />
        <div className=" flex flex-wrap gap-10 mb-10 justify-center">
          <div className=" relative flex w-full flex-col items-center mb-16 bg-n-7 p-5 py-14 border-2 border-n-5">
            <h3 className="h3 mb-12 ">
              {` `}
              <span className="inline-block relative">
                Hackvortex{" "}
                <img
                  src={curve}
                  className="absolute top-full left-0 w-full xl:-mt-2"
                  width={624}
                  height={28}
                  alt="Curve"
                />
              </span>
            </h3>
            <p className="text-xl max-w-4xl text-center">
              The <strong>HackVortex</strong> hackathon, most awaited event of
              Murious. a <strong>18-hours </strong>
              long &quot;hackathon&quot; where juitians will come together in
              teams of <strong>2-4 members</strong> to create solutions for
              real-life problems, expect challenges in tech and creative mix of
              brainy fun! <br />
              <br />
              Push your limits, Innovate, and bring your ideas to life. with
              mentorship. brainstorming sessions, and exciting problem
              statements, this is your chance to shine. collaborate with
              like-minded peers and experience the thrill of building something
              impactful.
              <br />
              <br />
              Let&apos;s sit, play, eat, chill, and work to create the best we
              can!
            </p>
            <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-[.18]">
              <img
                src={
                  hackathonImage
                }
                width={380}
                height={362}
                alt=""
                className="w-full h-full object-cover"
              />
            </div>

            <Button
              href="https://example.com"
              className="text-xl mt-6 "
            >
                 Problem Statements
            </Button>
          </div>
          {studentEvents.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                backgroundImage: `url("${item.backgroundUrl}")`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>
              {item.light && <GradientLight />}
              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              />
              <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                {item.imageUrl && (
                  <img
                    src={item.imageUrl}
                    width={380}
                    height={363}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <ClipPath />
            </div>
          ))}
        </div>
        <Heading className="md:max-w-md lg:max-w-2xl" title="Faculty Events" />
        <div className="flex flex-wrap gap-10 mb-10 justify-center">
          {facultyEvents.map((item) => (
            <div
              className="block relative p-0.5 bg-no-repeat bg-[length:100%_100%] md:max-w-[24rem]"
              style={{
                background: `url("${item.backgroundUrl}")`,
              }}
              key={item.id}
            >
              <div className="relative z-2 flex flex-col min-h-[22rem] p-[2.4rem] pointer-events-none">
                <h5 className="h5 mb-5">{item.title}</h5>
                <p className="body-2 mb-6 text-n-3">{item.text}</p>
                <div className="flex items-center mt-auto">
                  <p className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider">
                    Explore more
                  </p>
                  <Arrow />
                </div>
              </div>
              {item.light && <GradientLight />}
              <div
                className="absolute inset-0.5 bg-n-8"
                style={{ clipPath: "url(#benefits)" }}
              />
              <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                {item.imageUrl && (
                  <img
                    src={item.imageUrl}
                    width={380}
                    height={362}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                )}
              </div>
              <ClipPath />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Benefits;

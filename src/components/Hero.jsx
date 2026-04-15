import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import SplitText from "gsap/SplitText";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";

const Hero = () => {
  const videoRef = useRef();

  const isMobile = useMediaQuery({ maxWidth: 767 });

  useGSAP(() => {
    const heroSplit = new SplitText(".title", { type: "chars, words" });
    const subtitleSplit = new SplitText(".subtitle", { type: "lines" });

    heroSplit.chars.forEach((char) => char.classList.add("text-gradient"));

    gsap.from(heroSplit.chars, {
      yPercent: 50,
      opacity: 0,
      stagger: 0.05,
      ease: "expo.inOut",
      duration: 1.4,
    });

    gsap.from(subtitleSplit.lines, {
      yPercent: 50,
      opacity: 0,
      stagger: 0.05,
      ease: "expo.out",
      duration: 1,
      delay: 1,
    });

    gsap.from('.video', {
      opacity: 0,
      ease: "expo.inOut",
      duration: 1.4,
      delay: 1,
    });

    gsap
      .timeline({
        scrollTrigger: {
          trigger: "#hero",
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      })
      .to(".left-leaf", { y: 150 }, 0)
      .to(".right-leaf", { y: 200 }, 0);

    gsap.set([".left-leaf", ".right-leaf"], {
      filter: "blur(15px)"
    });

    gsap.to([".left-leaf", ".right-leaf"], {
      filter: "blur(0px)",
      duration: 3,
      ease: "expo.out",
    });

    const startValue = isMobile ? "top 50%" : "center 60%";
    const endValue = isMobile ? "120% top" : "bottom top";

    let tl = gsap.timeline({
      scrollTrigger: {
        trigger: "video",
        start: startValue,
        end: endValue,
        scrub: true,
        pin: true,
      },
    });

    videoRef.current.onloadedmetadata = () => {
      tl.to(videoRef.current, {
        currentTime: videoRef.current.duration,
      });
    };
  }, []);

  return (
    <>
      <section id="hero" className="noisy">
        <h1 className="title">MOJITO</h1>
        <img
          src="/images/hero-left-leaf.png"
          alt="left-leaf"
          className="left-leaf"
        />
        <img
          src="/images/hero-right-leaf.png"
          alt="right-leaf"
          className="right-leaf"
        />

        <div className="body">
          <div className="content">
            <div className="space-y-5 hidden md:block">
              <p>Cool. Soft. Classic.</p>
              <p className="subtitle">
                A Refreshing Blend <br />
                of Flavors
              </p>
            </div>

            <div className="view-cocktails">
              <p className="subtitle">
                Every sip is a celebration of the art of mixology, where each of
                our cocktail is a blend of premium ingredients, creative, and
                timeless recipes.
              </p>
              <a href="cocktails">View Cocktails</a>
            </div>
          </div>
        </div>
      </section>

      <div className="video absolute inset-0">
        <video
          ref={videoRef}
          muted
          playsInline
          preload="auto"
          src="public/videos/output.mp4"
        />
      </div>
    </>
  );
};

export default Hero;

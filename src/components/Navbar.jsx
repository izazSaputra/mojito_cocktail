import React from "react";
import { navLinks } from "../../constant/index.js";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const Navbar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom bottom",
      },
    });
    navTween.fromTo(
      "nav",
      { backgroundColor: "transparant" },
      {
        backgroundColor: "#00000005",
        duration: 1,
        "backdrop-filter": "blur(10px)",
        ease: "power1.inOut",
      },
    );
  });

  return (
    <nav>
      <div>
        <a href="#home" className="flex items-center gap-2">
          <img src="/public/images/Logo.png" alt="Velvet Pour" />
          <p>Velvet Pour</p>
        </a>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};
export default Navbar;

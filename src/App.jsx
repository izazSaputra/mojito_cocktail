import React from "react";
import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import Navbar from "./components/Navbar";

gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () => {
  return (
    <main>
      <Navbar />
      <div>
        <section id="home" className="h-screen flex items-center justify-center">
          <h1 className="text-5xl font-bold">Welcome to Velvet Pour</h1>
        </section>
      </div>
      <div>
        <section id="about" className="h-screen flex items-center justify-center">
          <h2 className="text-3xl font-semibold">About Us</h2>
          <p className="mt-4 text-lg max-w-xl text-center">
            Velvet Pour is your go-to destination for exquisite cocktails and mocktails. We are passionate about crafting unique and delicious beverages that delight your taste buds. Whether you're looking for a classic cocktail or a refreshing mocktail, we've got you covered.
          </p>
        </section>
      </div>
    </main>
  );
};

export default App;

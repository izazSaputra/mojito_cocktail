const Hero = () => {
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
    </>
  );
};

export default Hero;

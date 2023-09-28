

const Hero = () => {
  return (
    <section
      className="main min-h-[90vh] grid place-content-center"
      data-aos="zoom-in-up"
    >
      <div className="hero_content flex-between h-3/4">
        <div className="hero_text">
          <p className="text-7xl font-bold">
            Every Bite,<br />Thoughtfully <span className="p-2 bg-light-green">Planned.</span>
          </p>
          <p className="text-2xl w-3/4 text-gray-400 font-semibold mt-10">
            MealMate is your ultimate meal planning companion
            helping you savor every meal, your way.
          </p>
        </div>
        <div className="hero_image" data-aos="zoom-in-up" data-aos-duration="" >
          <img src={"/assets/hero-icon.png"} width={568} alt="Hero Image" />
        </div>
      </div>
      <div className="flex-center">
        <img src={"/assets/hero-arrow.png"} alt="Scroll down" />
      </div>
    </section>
  )
}

export default Hero
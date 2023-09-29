import HeroIcon from '../../assets/hero-icon.png'
import Arrow from '../../assets/hero-arrow.png'

const Hero = () => {
  console.log(process.env.REACT_APP_ACCESS_KEY_UNSPLASH)
  return (
    <section
      className="main min-h-[90vh] grid place-content-center"
      data-aos="zoom-in-up"
    >
      <div className="hero_content flex-between h-3/4">
        <div className="hero_text">
          <p className="text-7xl font-bold " style={{ lineHeight : "85px"}}>
            Every Design,<br />
            Thoughtfully <span className="bg-purple-200">Planned.</span>
          </p>
          <p className="text-2xl w-3/4 text-gray-400 font-semibold mt-10">
            WalGen is your ultimate quote generator, wallpaper generator and best background gallery.
          </p>
        </div>
        <div className="hero_image" data-aos="zoom-in-up" data-aos-duration="" >
          <img src={HeroIcon} width={475} alt="Hero " />
        </div>
      </div>
      <div className="flex-center">
        <img src={Arrow} alt="Scroll down" />
      </div>
    </section>
  )
}

export default Hero
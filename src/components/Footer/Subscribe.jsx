

const Subscribe = () => {
  return (
    <div className="w-[80%] md:min-h-[15vh] mx-auto bg-custom-black px-5 py-10 flex-col md:flex-row flex justify-evenly items-center rounded-2xl text-white">
                <div className="text-3xl">
                    Subscribe to our <br/>Newsletters
                </div>
                <form action="" className="bg-white  px-5 py-4 rounded-lg">
                    <input type="text" name="email" id="email" placeholder="Enter your email" className="h-[5vh] text-lg active:outline-none focus:outline-none text-black" />
                    <button type="submit" className="bg-light-green text-black text-xl px-5 py-4 rounded-md text-center">
                        Subscribe Now
                    </button>
                </form>
        </div>
  )
}

export default Subscribe

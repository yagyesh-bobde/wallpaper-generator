import { useState, useEffect, useContext } from 'react'
import Quote from '../assets/quote.svg'
import walgenContext from '../context/walgenContext'


const QuoteGenerator = () => {
  const  { categories } = useContext(walgenContext)
  const [quote , setQuote ] = useState({
    quote: "To be perfectly happy it does not suffice to possess happiness, it is necessary to have deserved it.",
    author: "Victor Hugo",
    category: "happiness"
})
  const [category , setCategory ] = useState("happiness")


  const generateRandomCategory = () => {
    let no = Math.floor(Math.random() * 67)
    setCategory(categories[no])
    fetchQuote()
    return no
  }

  const capitalizeFirstLetter = (str) => { 
    return str[0].toUpperCase() + str.slice(1)
  }

    var myHeaders = new Headers();
    myHeaders.append("X-Api-Key", "tBRXBGs5FaWeFjoTapMkNg==87gf6HPDWF9ZP2Lf");

    var requestOptions = {
      method: 'GET',
      headers: myHeaders,
      redirect: 'follow'
    };

    const fetchQuote = () => {
      fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result[0])
        setQuote(result[0])
      })
      .catch(error => console.log('error', error));
    }

    useEffect(() => {
      //fetchQuote()
    }, [])

  return (
    <div className="relative grid place-content-center min-h-[85vh] min-w-screen px-10">
      <button className="absolute top-10 left-[50%] right-[50%] text-2xl font-semibold shadow-2xl rounded-full px-5 py-3 duration-500 hover:scale-110 hover:shadow-5xl" onClick={generateRandomCategory}>
        Generate
      </button>
      <div className="relative quote p-5 w-full md:min-w-[50vw] text-center">
        <img src={Quote} alt="quote" width={75} className="absolute top-0 sm:left-0 " style={{  transform: 'scaleX(-1)'}} />
          <p className="w-3/4 mx-auto text-2xl md:text-4xl lg:text-6xl">
            {quote.quote} <span className="text-2xl whitespace-nowrap mx-[75px] text-gray-400 italic"><span>~</span>{quote.author}</span>
          </p>
        <img src={Quote} alt="quote" width={75} className="absolute bottom-0 sm:right-0" style={{  transform: "scaleX(-1) rotate(180deg)" }}/>
      </div>
      <div className="bg-gray-200 w-full text-center text-xl absolute bottom-0 py-5 font-semibold cursor-pointer hover:text-2xl duration-300" >
        {
          capitalizeFirstLetter(category)
        }
      </div>
    </div>
  )
}

export default QuoteGenerator
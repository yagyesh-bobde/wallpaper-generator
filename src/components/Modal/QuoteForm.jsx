import { useState, useContext } from "react"
import mealContext from "../../context/walgenContext"


const QuoteForm = ({ setshowForm } ) => {
    const { user,categories, createQuote } = useContext(mealContext)
    
    const [formData, setformData] = useState({
        user_id : user.id || 1,
        quote: "",
        author : user.name || "user", 
        category : ''
    })

    const updateFormData = (e) => {
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

  return (
      <div className="fixed left-0 top-0 right-0 bottom-0 z-[1055] overflow-y-auto overflow-x-hidden outline-none grid place-content-center backdrop-blur-sm">
          <div className="text-black w-[350px] md:w-[600px] min-h-[25vh] bg-white shadow-xl flex flex-col h-full">
              <div className="heading flex items-center p-3 text-3xl border-b-2 h-[30%] font-bold">
                <h2 className="">Add Quote</h2>
              </div>

              <form className="body flex flex-col gap-5 text-2xl font-light p-3 ">
                  <div className="form-group flex flex-col gap-2">
                    <label htmlFor="quote" className="font-semibold">
                        Quote
                    </label>
                    <input type="text" name="quote" id="quote" className="border-2 rounded-md p-3 w-full focus:outline-none" placeholder="Enter your quote" value={formData.quote} onChange={updateFormData} />
                  </div>
                  <div className="form-group flex flex-col gap-2">
                    <label htmlFor="author" className="font-semibold">
                        Author
                    </label>
                    <input disabled type="text" name="author" id="author" className="border-2 rounded-md p-3 w-full focus:outline-none cursor-not-allowed bg-gray-200" placeholder="Enter author name" value={formData.author} onChange={updateFormData} />
                  </div>
                  <div className="form-group flex flex-col gap-2">
                    <label htmlFor="category" className="font-semibold">
                        Category
                    </label>
                    <select name="category" id="category" className="border-2 rounded-md p-3 w-full focus:outline-none" onChange={updateFormData}>
                        {
                            categories.map(category => {
                                return(
                                    <option key={category} value={category}>
                                        {category}
                                    </option>
                                )
                            })
                        }
                    </select>
                  </div>
              </form>


              <div className="footer flex justify-end gap-5 items-center border-t-2 p-3 h-[30%]">
                  <button onClick={() => {
                      setshowForm(false)

                  }} className="border-2 bg-gray-500 text-white p-3 rounded-md text-xl">
                      Cancel
                  </button>
                  <button className="border-2 bg-green-500 text-white p-3 rounded-md text-xl"
                      onClick={() => {
                          createQuote(formData)
                          setshowForm(false)
                      }}
                  >
                      Add
                  </button>
              </div>
          </div>
      </div>
  )
}

export default QuoteForm
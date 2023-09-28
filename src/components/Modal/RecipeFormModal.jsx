import { useState, useContext } from "react"
import mealContext from "../../context/mealContext"


const RecipeFormModal = ({ setshowForm } ) => {
    const { addRecipe } = useContext(mealContext)
    const [formData, setformData] = useState({
        recipe_name: '',
        ingredients: '',
        rating: 1,
        img_src: ""
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
                <h2 className="">Add Recipe</h2>
              </div>

              <form className="body flex flex-col gap-5 text-2xl font-light p-3 ">
                  <div className="form-group flex flex-col gap-2">
                    <label htmlFor="recipe_name" className="font-semibold">
                        Recipe Name
                    </label>
                    <input type="text" name="recipe_name" id="recipe_name" className="border-2 rounded-md p-3 w-full focus:outline-none" placeholder="Enter a recipe name" value={formData.recipe_name} onChange={updateFormData} />
                  </div>
                  <div className="form-group flex flex-col gap-2">
                    <label htmlFor="ingredients" className="font-semibold">
                        Ingredients
                    </label>
                    <input type="text" name="ingredients" id="recipe_name" className="border-2 rounded-md p-3 w-full focus:outline-none" placeholder="Enter list of ingredients" value={formData.ingredients} onChange={updateFormData} />
                  </div>
                  <div className="form-group flex flex-col gap-2">
                    <label htmlFor="rating" className="font-semibold">
                        Rating
                    </label>
                    <section className="flex items-center gap-5">
                        <input type="range" draggable  name="rating" id="rating" min={1} max={5} value={formData.rating} className="border-2 rounded-md p-3 w-full focus:outline-none" placeholder="Enter rating" onChange={updateFormData} />
                        <span className="text-xl font-semibold">
                            { formData.rating }
                        </span>
                    </section>
                  </div>
                  <div className="form-group flex flex-col gap-2">
                    <label htmlFor="img_src" className="font-semibold">
                        Image
                    </label>
                    <input type="url" name="img_src" id="img_src" className="border-2 rounded-md p-3 w-full focus:outline-none" placeholder="Enter image url" value={formData.img_src} onChange={updateFormData} />
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
                          addRecipe(formData)
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

export default RecipeFormModal
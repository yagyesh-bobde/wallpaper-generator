import { useContext, useEffect, useState } from "react"
import mealContext from "../context/walgenContext"
import { Link } from "react-router-dom"

const Planner = () => {
    const { getMealPlan } = useContext(mealContext)
    const [formData, setformData] = useState({
        targetCal: 0,
        timeframe: "day",
        diet: "vegetarian"
    })
    const [mealPlan, setmealPlan] = useState([
        {
            "id": 635446,
            "imageType": "jpg",
            "title": "Blueberry Cinnamon Porridge",
            "readyInMinutes": 45,
            "servings": 1,
            "sourceUrl": "https://spoonacular.com/blueberry-cinnamon-porridge-635446"
        },
        {
            "id": 642777,
            "imageType": "jpg",
            "title": "Fig and Goat Cheese Pizza With Pesto",
            "readyInMinutes": 15,
            "servings": 6,
            "sourceUrl": "https://spoonacular.com/fig-and-goat-cheese-pizza-with-pesto-642777"
        },
        {
            "id": 157344,
            "imageType": "jpg",
            "title": "Spicy Salad with Kidney Beans, Cheddar, and Nuts",
            "readyInMinutes": 10,
            "servings": 1,
            "sourceUrl": "https://spoonacular.com/spicy-salad-with-kidney-beans-cheddar-and-nuts-157344"
        }
    ])

    const showMealPlan = async(e) => {
        e.preventDefault()
        const meals = await getMealPlan(...formData)

        setmealPlan(meals)
    }

 
    const updateFormData = (e) => {
        setformData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }    
  return (
    <div className="min-h-screen">
        <h2 className="text-center">
            Meal Planner
        </h2>
          <form className="flex-center flex-col shadow-xl border-0 " onSubmit={(e) => showMealPlan(e)}>
                <div className="w-1/2 my-2">
                    <label htmlFor="targetCal" className=" block w-full font-semibold text-xl mx-5">
                        Target Calories
                    </label>
                  <input value={formData.targetCal} onChange={updateFormData} type="number" name="targetCal" id="targetCal" className="border-2 border-gray-300 shadow-xl bg-transparent mx-5 w-full px-5 py-3 rounded-xl" placeholder="Enter Calorie target" />
                </div>
                <div className="w-1/2 my-2">
                    <label htmlFor="timeframe" className="block w-full font-semibold text-xl mx-5">
                        Time Frame
                    </label>
                  <select value={formData.timeframe} onChange={updateFormData} name="timeframe" id="timeframe" className="border-2 border-gray-300 shadow-xl bg-transparent mx-5 w-full  py-3 rounded-xl  px-5">
                        <option value="day">Day</option>
                        <option value="week">Week</option>
                    </select>
                </div>
                <div className="w-1/2 my-2">
                    <label htmlFor="diet" className=" block w-full font-semibold text-xl mx-5">
                        Diet
                    </label>
                  <select value={formData.diet} onChange={updateFormData} name="diet" id="diet" className="border-2 border-gray-300 shadow-xl bg-transparent mx-5 w-full  py-3 rounded-xl  px-5">
                        <option value="vegetarian">Vegetarian</option>
                        <option value="vegan">Vegan</option>
                        <option value="gluten free">Gluten Free</option>
                        <option value="dairy free">Dairy Free</option>
                        <option value="ketogenic">Ketogenic</option>
                    </select>
                </div>
            <button type="submit" className="rounded-full px-5 py-4 text-center bg-green-300 text-black my-5 font-semibold"  >
                    Generate Meal Plan
                </button>
              </form>

              {
                  mealPlan.length &&
                  <ul className='relative flex mx-auto flex-wrap justify-center p-5'>
                      {
                          mealPlan && mealPlan.map((recipe, index) => {
                              return (
                                  <li key={index} className=" w-full max-h-[35vh] md:max-w-[25vw] rounded overflow-hidden m-5 shadow-lg">
                                      <div className="w-full h-[45%]">
                                          <img width={"100%"} className="w-full h-full" src={`https://spoonacular.com/recipeImages/${recipe.id}-556x370.jpg`} alt={recipe?.title} />
                                      </div>
                                      <div className="px-6 py-2">
                                          <div className="font-bold text-xl mb-2">
                                              {recipe?.title.toString().slice(0, 23)}
                                          </div>
                                      </div>
                                      <div className="px-6 pt-4 pb-2">
                                          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Time: {recipe.readyInMinutes} min</span>
                                          <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">Servings: {recipe.servings}</span>
                                          <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                                              <Link to={recipe.sourceUrl} target="_blank">
                                                  Visit Page
                                              </Link>
                                          </span>
                                      </div>
                                  </li>
                              )
                          }
                          )}

                  </ul>
              }

    </div>
  )
}

export default Planner
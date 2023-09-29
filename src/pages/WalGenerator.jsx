import { useContext, useEffect, useState } from "react"
import mealContext from "../context/walgenContext"
import { Link, Navigate, useNavigate } from "react-router-dom"

const Planner = () => {
    const { getMealPlan } = useContext(mealContext)
    const navigate = useNavigate()
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
    
    useEffect(() => {
        if (localStorage.getItem('login')=== 'true'){ 
            navigate('/login')
        } 
    }, [])


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

    </div>
  )
}

export default Planner
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
    const [mealPlan, setmealPlan] = useState([])

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
        if (localStorage.getItem('login') !== 'true'){ 
            navigate('/login')
        } 
    }, [])


  return (
    <div className="min-h-screen">
        <h2 className="text-center">
            Wallpaper Generator
        </h2>
        <div className="flex-center flex-col shadow-xl border-0 " onSubmit={(e) => showMealPlan(e)}>
            Wait...
        </div>

    </div>
  )
}

export default Planner
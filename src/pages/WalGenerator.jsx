import { useContext, useEffect, useState, useRef } from "react"
import mealContext from "../context/walgenContext"
import { Link, Navigate, useNavigate } from "react-router-dom"
import Fluid from 'webgl-fluid'

import Save from '../assets/save.svg' 
import canvasScreenshot from "canvas-screenshot";


const Planner = () => {
    const canvas = useRef(null)
    const { getMealPlan, createWallpaper, uploadImage } = useContext(mealContext)
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

    const saveSS= async() => {
        let c = canvas.current
        let filename=`WalGen-${c.width}x${c.height}.png`
        const img = c.toDataURL()
        uploadImage(img, filename)
        c.toBlob((blob) => {
            saveBlob(blob, filename)
        })
    }

    const saveBlob = (function() {
      const a = document.createElement('a');
      document.body.appendChild(a);
      a.style.display = 'none';
      return function saveData(blob, fileName) {
         const url = window.URL.createObjectURL(blob);
         a.href = url;
         a.download = fileName;
         a.click();
      };
    }());    



    useEffect(() => {
        if (localStorage.getItem('login') !== 'true'){ 
            navigate('/login')
        } 
        let c = canvas.current
        c.getContext("webgl", {preserveDrawingBuffer: true})
        Fluid(c)
    }, [])

    

  return (
    <div className="min-h-screen">
        <div className="flex-between mb-5">
            <h2 className="text-center my-2">
                Wallpaper Generator
            </h2>
            <button className="flex items-center gap-5 text-2xl font-semibold shadow-2xl rounded-full px-5 py-3 duration-200 hover:scale-110 hover:shadow-5xl" onClick={saveSS}>
                <img src={Save} alt="save screenshot" />
                <p>Save</p>
            </button>

        </div>
        <canvas ref={canvas} className="flex-center flex-col shadow-xl border-0 w-full" onSubmit={(e) => showMealPlan(e)}>
            Wait...
        </canvas>

    </div>
  )
}

export default Planner

import { useState } from "react";
import mealContext from "./mealContext";

const MealProvider = (props) => {
    const [recipes, setrecipes] = useState([])
    
    // TODO: Fetch recipes
    const fetchRecipes = async () => {
        try {
            // const response = await fetch(`${import.meta.env.VITE_OUTERBASE_URL}/recipes`)
            const response = await fetch('https://developed-lavender.cmd.outerbase.io/recipes')
            const data = await response.json()
            // setAllRecipes(data.response)
            if(data.success) {
                setrecipes(data.response.items)
            }
        } catch (error) {
            console.log(error)
        }
    }

    // TODO: Add recipe
    const addRecipe = async(formData) => {
        try{ 
            const response = await fetch("https://developed-lavender.cmd.outerbase.io/create-recipe", {
            'method': 'POST',
            'headers': {
                'content-type': 'application/json'
            },
            'body': JSON.stringify(formData)
            })

            const res = await response.json()   
            console.log(res)
        }catch(error) {
            console.log("Error" + error.message)
        }
    }



    // TODO: Get meal plan
    const getMealPlan = async(timeframe= "day" , targetCal = 2000 , diet="vegetarian") => {
        try {
            const response = await fetch(`https://api.spoonacular.com/mealplanner/generate?apiKey=${import.meta.env.VITE_SPOONACULAR_API_KEY}&timeFrame=${timeframe}&targetCalories=${targetCal}&diet=${diet}`)
            const data = await response.json()
            console.log(data)
            return data.meals
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <mealContext.Provider value={{ 
            recipes,
            fetchRecipes,
            addRecipe,
            getMealPlan
         }}>
        { props.children }
        </mealContext.Provider>
    );
};

export default MealProvider;
import { useState } from "react";
import walgenContext from "./walgenContext";
import { toast } from "react-toastify";

const MealProvider = (props) => {
    const host = "https://api.unsplash.com"
    const [quotes, setquotes] = useState([]) 

    const categories = ['age', 'alone', 'amazing', 'anger', 'architecture', 'art', 'attitude', 'beauty', 'best', 'birthday', 'business', 'car', 'change', 'communications', 'computers', 'cool', 'courage', 'dad', 'dating', 'death', 'design', 'dreams', 'education', 'environmental', 'equality', 'experience', 'failure', 'faith', 'family', 'famous', 'fear', 'fitness', 'food', 'forgiveness', 'freedom', 'friendship', 'funny', 'future', 'god', 'good', 'government', 'graduation', 'great', 'happiness', 'health', 'history', 'home', 'hope', 'humor', 'imagination', 'inspirational', 'intelligence', 'jealousy', 'knowledge', 'leadership', 'learning', 'legal', 'life', 'love', 'marriage', 'medical', 'men', 'mom', 'money', 'morning', 'movies', 'success']
    const [user, setuser] = useState({
        id: 0, 
        name: '', 
        email: '', 
    })
    
    const notify = (error=false, message) => {
        if (!error) {
            toast.success(message, {
                position: toast.POSITION.TOP_CENTER
            });
        } else {
            toast.error(message, {
                position: toast.POSITION.TOP_CENTER
            });
        }
    }


    // QUOTES
    const fetchAllQuotes = async(id) => {
        try{

        const response = await fetch(`https://encouraging-scarlet.cmd.outerbase.io/quotes`, {
            method: 'GET',
            headers: {
                'content-type': 'application/json'
            }
            })
        
            console.log(response)
            const res = await response.json() 
            if(res.success){
                const filterList = res.response.items
                let newList = filterList.filter((item) => item.user_id == id)
                console.log(newList)
                setquotes(newList)
            }
        } catch(error) {
            console.log(error)
            notify(true, "Failed to fetch quotes!")
        }
        
    }
    

        // TODO: add quote
        const createQuote = async(quote) => {

                const response = await fetch("https://encouraging-scarlet.cmd.outerbase.io/newquote", {
                    method: 'POST',
                    mode : 'no-cors',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify({
                        user_id : quote.user_id.toString(),
                        quote : quote.quote.toString(),
                        author : quote.author.toString(),
                        category: quote.category.toString()
                    })
                })
                
                
                notify(false, "Successfully Created Quote!")
                setquotes([...quotes, quote])

        }


    return (
        <walgenContext.Provider value={{ 
            user, setuser, notify, categories,
            fetchAllQuotes, quotes, setquotes, createQuote
         }}>
        { props.children }
        </walgenContext.Provider>
    );
};

export default MealProvider;
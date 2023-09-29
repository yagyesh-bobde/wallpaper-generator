import { useState } from "react"
import { send } from "@emailjs/browser"

const Subscribe = () => {
  const [email, setemail] = useState("")
  

  const sendEmail = () => {
    // e.preventDefault()
    send("service_9j9jeqz", "template_z04us2y", {
      name: "User",
      email: email,
    }, "hGy8eHHHGgf3blQJ_").then(function (response) {
      console.log('SUCCESS!', response.status, response.text);
    }, function (error) {
      console.log('FAILED...', error);
    });
  }


  const subscribe = async (e) => {
    e.preventDefault()
    console.log(email)
    const response = await fetch("https://encouraging-scarlet.cmd.outerbase.io/newsub", {
      'method': 'POST',
      'headers': {
        'content-type': 'application/json'
      },
      'body': JSON.stringify({
        email: email,
        createdAt: new Date(),
        subscribeTo : 'walgen'
      })
    })

      const res = await response.json()
      console.log(res)
      if(res.success) {
        setemail('')
        sendEmail()
      }
    }

  return (
    <div className="w-[80%] md:min-h-[15vh] mx-auto bg-custom-black px-5 py-10 flex-col md:flex-row flex justify-evenly items-center rounded-2xl text-white">
      <div className="text-3xl">
        Subscribe to our <br />Newsletters
      </div>
      <form onSubmit={(e) => subscribe(e)} className="bg-white  px-5 py-4 rounded-lg">
        <input type="text" value={email} name="email" id="email" placeholder="Enter your email" className="h-[5vh] text-lg active:outline-none focus:outline-none text-black" onChange={(e) => {
          setemail(e.target.value)
        }} />
        <button type="submit" className="bg-light-green text-black text-xl px-5 py-4 rounded-md text-center">
          Subscribe Now
        </button>
      </form>
    </div>
  )
}

export default Subscribe
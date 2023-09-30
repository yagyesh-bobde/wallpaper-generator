import { useState, useContext } from "react"
import mealContext from "../../context/walgenContext"


const DeleteModal = ({ id, setDeleteModal } ) => {
    const { user, notify, setquotes, quotes } = useContext(mealContext)

    const handleDelete = async() => {
        try{
            const response = await fetch("https://encouraging-scarlet.cmd.outerbase.io/deletequote", {
                method: 'DELETE',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify({
                    id: id.toString()
                })
            })
            const res = await response.json()
            console.log(res)
            if(res.success) {
                notify(false, "Deleted Successfully!")
                let filterList =  quotes.filter(quote => quote.id != id)
                setquotes(filterList)
            }
        }catch(error){
            notify(true, "Could not delete. Try Again!")
            console.log(error)
        }
    }

  return (
      <div className="fixed left-0 top-0 right-0 bottom-0 z-[1055] overflow-y-auto overflow-x-hidden outline-none grid place-content-center backdrop-blur-sm">
          <div className="text-black w-[350px] md:w-[600px] min-h-[25vh] bg-white shadow-xl flex flex-col h-full">
              <div className="heading flex items-center p-3 text-3xl border-b-2 h-[30%] font-bold">
                <h2 className="">Delete Quote</h2>
              </div>

              <form className="body flex flex-col gap-5 text-2xl font-light p-3 ">
                  Are you sure you want to delete this quote?
              </form>


              <div className="footer flex justify-end gap-5 items-center border-t-2 p-3 h-[30%]">
                  <button onClick={() => {
                      setDeleteModal(false)
                  }} className="border-2 bg-gray-500 text-white p-3 rounded-md text-xl">
                      Cancel
                  </button>
                  <button className="border-2 bg-red-500 text-white p-3 rounded-md text-xl"
                      onClick={() => {
                        handleDelete()
                        setDeleteModal(false)
                      }}
                  >
                      Delete
                  </button>
              </div>
          </div>
      </div>
  )
}

export default DeleteModal
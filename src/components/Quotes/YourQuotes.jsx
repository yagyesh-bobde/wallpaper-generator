import { useState } from "react"
import DeleteModal from '../Modal/DeleteModal'
import Delete from '../../assets/delete.svg'
import Plus from '../../assets/plus.svg'
import QuoteForm from '../Modal/QuoteForm'
const YourQuotes = ({ quotes }) => {
    const [showForm, setshowForm] = useState(false)
  const [deleteModal, setDeleteModal] = useState(false)
    return (
                    <>
          <h3>Your Quotes</h3>
          <ul className=" shadow-xl roundex-2xl p-5 w-1/2 mx-auto h-[80%] overflow-y-auto" >
            {
              quotes.map((quote, index) => {
                return(
                  <li className="flex-between border-b-[1px] border-gray-200 py-4">
                    <p>
                      {quote.quote}
                    </p>
                    <div className="flex items-center gap-1">
                      <button className="duration-300 hover:scale-110" 
                      onClick={() => {
                        setDeleteModal(true)
                      }} >
                        <img src={Delete} alt="delete quote" />
                      </button>
                    </div>
                            {
          deleteModal && <DeleteModal setDeleteModal={setDeleteModal} id={quote.id} />
        }
                  </li>
                )
              })
            }
            <button className="absolute z-10 bottom-1 shadow-xl left-[50%] right-[50%] rounded-full w-[75px] h-[75px] flex-center duration-300 hover:scale-110"
            onClick={() => setshowForm((prev) => {
              return !prev
            })}
            >
              <img src={Plus} className="w-[30px]  hover:[55px]" alt="add quote" />
            </button>
          </ul>
       {
          showForm && <QuoteForm setshowForm={setshowForm} />
        }
        </>
    )
}


export default YourQuotes
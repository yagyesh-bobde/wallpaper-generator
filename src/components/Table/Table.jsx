import { tableData } from "./data"
import { useState } from 'react'


const Table = () => {
    const [tableRows , _ ] = useState([...tableData])
  return (
        <table data-aos="slide-up" data-aos-duration="1000"  className="table w-full sm:w-[65%]  mx-auto my-10"
        style={{ borderRadius: '50px !important'  }}
        >
            <tbody>
            {
                tableRows.map((row, index) => {
                    return (
                        <tr  key={index} className={`flex ${index % 2 == 0 && 'flex-row-reverse'} rounded-full`} >
                            <td 
                            className={`flex-col flex gap-5 text-black  w-full text-custom-gray flex-center text-center border-[3px] ${index %2 !== 0 ? 'border-r-0' : 'border-l-0'}  border-dashed border-custom-gray `}>
                                <h1 className='w-3/4 text-gray-600'>
                                    {row.title}
                                </h1>
                                <p className='w-3/4 text-gray-400 font-semibold'>
                                    {row.desc}
                                </p>
                                <button className='bg-light-green px-5 py-3 rounded-full border-2 border-black text-custom-black font-semibold'>
                                    {row.buttonText}
                                </button>
                            </td>
                            <td className={`flex-center w-full border-[3px] border-dashed border-custom-gray `}>
                                <img src={row.img} alt={row.title} />
                            </td>
                        </tr>
                    )
                }
            )}
          </tbody>
        </table>
  )
}

export default Table

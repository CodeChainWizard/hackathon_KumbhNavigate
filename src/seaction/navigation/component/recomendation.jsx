import { useCallback, useEffect, useMemo, useRef, useState } from 'react'
// import Sheet, { SheetRef } from 'react-modal-sheet';



export default function Recomendation({ setDropDownChange }) {

    return (

        <div
            className=" fixed inset-0 p-4 flex flex-wrap justify-center items-center w-full h-full z-[1000] before:fixed before:inset-0 before:w-full before:h-full before:bg-[rgba(0,0,0,0.5)] overflow-auto font-[sans-serif]">

            <div className=" w-full max-w-lg bg-white shadow-lg rounded-md p-3 relative">

                <div className="flex items-center pb-3 border-b text-black">
                    <h3 className="text-xl font-bold flex-1">Search Your Place</h3>

                    <button onClick={() => setDropDownChange(false)}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="w-3.5 ml-2 cursor-pointer shrink-0 fill-black hover:fill-red-500"
                            viewBox="0 0 320.591 320.591">
                            <path
                                d="M30.391 318.583a30.37 30.37 0 0 1-21.56-7.288c-11.774-11.844-11.774-30.973 0-42.817L266.643 10.665c12.246-11.459 31.462-10.822 42.921 1.424 10.362 11.074 10.966 28.095 1.414 39.875L51.647 311.295a30.366 30.366 0 0 1-21.256 7.288z"
                                data-original="#000000"></path>
                            <path
                                d="M287.9 318.583a30.37 30.37 0 0 1-21.257-8.806L8.83 51.963C-2.078 39.225-.595 20.055 12.143 9.146c11.369-9.736 28.136-9.736 39.504 0l259.331 257.813c12.243 11.462 12.876 30.679 1.414 42.922-.456.487-.927.958-1.414 1.414a30.368 30.368 0 0 1-23.078 7.288z"
                                data-original="#000000"></path>
                        </svg>
                    </button>
                </div>

                <div className='overflow-auto h-[500px]'>
                    <ReomendationCard />
                    <ReomendationCard />

                    <ReomendationCard />

                    <ReomendationCard />

                    <ReomendationCard />

                    <ReomendationCard />
                </div>
                {/* card */}






            </div>
        </div>



    )
}




export function ReomendationCard() {
    return (
        <div className="my-6">
            <div
                className=" px-1 m-1 items-center h-auto flex flex-row-reverse  bg-white shadow-[0_2px_18px_-6px_rgba(0,0,0,0.2)]  rounded-lg overflow-hidden  font-[sans-serif] ">
                <img src="https://readymadeui.com/cardImg.webp" className="w-[35%] m-1 rounded-md h-[40%] " />
                <div className="px-3 py-3">
                    <h3 className="text-[#333] text-xl font-bold">Heading</h3>
                    <p className="  mt-4 text-sm text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed auctor auctor
                        arcu,
                    </p>
                </div>
            </div>
        </div>
    )
}


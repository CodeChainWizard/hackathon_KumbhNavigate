
import { useState } from 'react'
import MyMap from "./component/MyMap"
import DropDownMunu from "./component/dropDownMunu"
import Recomendation from "./component/recomendation"




function MapSeaction() {


    const [isDropDownChange, setDropDownChange] = useState(false);


    return (
        <div className='static'>
            <MyMap />
            <DropDownMunu setDropDownChange={setDropDownChange} />

            {

                isDropDownChange == true ? <Recomendation setDropDownChange={setDropDownChange} /> : <div></div>

            }



        </div>

    )
}

export default MapSeaction







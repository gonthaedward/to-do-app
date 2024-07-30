
import dayjs from 'dayjs'
import {useState} from 'react'

function Body(){
    let day = new dayjs().format('HH:mm:ss');
    const [cDay, setDay] = useState(day)
    const updateDay =()=>{
        day = new dayjs().format('HH:mm:ss');
        setDay(day);
    }
    setInterval(updateDay);

    return(
    <div className="text-4xl flex-grow flex justify-center items-center text-white">
        <p>{day}</p> 
    </div>
    )
}

export default Body
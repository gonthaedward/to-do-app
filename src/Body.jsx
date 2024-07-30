
import dayjs from 'dayjs'
import {useState} from 'react'

function Body(){
    let day = new dayjs().format('ddd YYYY-MM-DD HH:mm:ss');
    const [cDay, setDay] = useState(day)
    const updateDay =()=>{
        day = new dayjs().format('ddd YYYY-MM-DD HH:mm:ss');
        setDay(day);
    }
    setInterval(updateDay);

    return(
    <div className="flex-grow flex justify-center items-center text-white">
        <p>Welcome, Current time in your place is {day}</p> 
    </div>
    )
}

export default Body
import { useEffect, useState } from "react";
import AppointmentDetails from "../AppointmentDetails";
const AppointmentComponent = (props) =>{
    const [appointments , setAppointments] = useState([]);
    console.log(props);
    // useEffect(() =>{

    // },[]);
    setAppointments([...appointments, props]);
    return (
        <div className="form-div">
            <ul>
            {appointments.map((element,index) => <AppointmentDetails key={index} props={element}/>)}
            </ul>
           
        </div>
    )
}
export default AppointmentComponent;
const AppointmentDetails =(props) =>{
    return (
        <div>
             <ul className="appointment-list">
                {
                    <li>{props}</li>
                }
            </ul>
        </div>
    )
}
export default AppointmentDetails;
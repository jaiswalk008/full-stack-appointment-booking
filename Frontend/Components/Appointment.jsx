import { useState } from "react"
import { Link } from "react-router-dom";
import AppointmentComponent from "./AppointmentComponent";

const Appointment = (props) =>{
    const newAppointmentHandler = (e) =>{
        e.preventDefault();
        const appointmentDetails = {
            name:e.target.name.value,
            email:e.target.email.value,
            phone:e.target.phone.value
        };
        // props.onAddAppointment(appointmentDetails);
        <AppointmentComponent props= {appointmentDetails}/>
        console.log(appointmentDetails);
    }
    const [name, setName] = useState('');
    const [email , setEmail] = useState('');
    const [phone , setPhone] = useState('');
    return (
      <div className="app">
        <div className="form-div">
          <form  onSubmit={newAppointmentHandler}>
            <label className="form-label" htmlFor="name">
              Name
            </label>
            <input className="form-control"
              name="name"
              id="name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></input>
            <br />
            <label className="form-label" htmlFor="email">
              Email
            </label>
            <input
              className="form-control"
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></input>
            <br />
            <label className="form-label" htmlFor="phone">
              Phone
            </label>
            <input
              className="form-control"
              type="tel"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            ></input>

            <button className="btn btn-dark mt-4 w-100">Submit </button>
          </form>
        </div>
        
        <Link to="/appointmentlist">
          <h3> Click here to see the Appointment List</h3>
        </Link>

      </div>
    );
}
export default Appointment
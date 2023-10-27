import  ReactDOM  from "react-dom/client";
import Header from "./Components/Header";
import Appointment from "./Components/Appointment";
import AppointmentList from "./Components/AppointmentList";
import { createBrowserRouter , RouterProvider , Outlet } from "react-router-dom";
import AppointmentDetails from "./AppointmentDetails";

const App = () =>{
    return(
        <>
            <Header/>
            <Outlet/>
            {/* <AppointmentDetails/> */}
        </>
    )
}
const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<App/>,
        children:[
            {
                path:"/",
                element:<Appointment/>
            },{
                path:"/appointmentlist",
                element:<AppointmentList/>
            }
        ]

    }
])
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<RouterProvider router={appRouter}/>);
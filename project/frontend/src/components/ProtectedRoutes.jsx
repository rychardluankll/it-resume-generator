import { Navigate, Outlet} from "react-router-dom";

export default function ProtectedRoutes({condition}) {
if(!condition){
    return <Navigate to="/home" replace />;
}
    return <Outlet />
    }
    
   
    
    
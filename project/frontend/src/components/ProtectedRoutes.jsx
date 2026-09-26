import { Navigate } from "react-router-dom";

export default function ProtectedRoutes() {
    return <Navigate to="/home" replace />;
}
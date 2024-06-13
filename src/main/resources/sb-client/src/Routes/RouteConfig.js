import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "../App";

const RouteConfig = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/sb" element={<App/>}>
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default RouteConfig;
import { createBrowserRouter } from "react-router-dom";
import Main from "../component/Main/Main";

const AllRouter = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: "home"
            }
        ]
    }
]);
export default AllRouter;
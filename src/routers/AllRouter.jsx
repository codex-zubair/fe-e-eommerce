import { createBrowserRouter } from "react-router-dom";

const AllRouter = createBrowserRouter([
    {
        path: '/',
        element: "main",
        children: [
            {
                path: '/',
                element: "home"
            }
        ]
    }
]);
export default AllRouter;
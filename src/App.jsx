import { RouterProvider } from 'react-router-dom'
import './App.css'
import AllRouter from './routers/AllRouter'


const App = () => {
  return (
    <div>
      <RouterProvider router={AllRouter} />
    </div>
  )
}

export default App;

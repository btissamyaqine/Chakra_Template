import { 
  createBrowserRouter, 
  createRoutesFromElements, 
  Route, 
  RouterProvider 
} from 'react-router-dom'

// layouts and pages
import RootLayout from './layout/RootLayout'
import Home, { tasksLoader } from './pages/Home'
import Contacts from './pages/Contacts'
import Services from './pages/Services'

// router and routes
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />}  />
      <Route path="Services" element={<Services />} />
      <Route path="Contacts" element={<Contacts />} />
    </Route>
  )
)

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
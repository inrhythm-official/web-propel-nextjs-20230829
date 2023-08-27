import '../node_modules/bootstrap/dist/css/bootstrap.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from "./components/pages/Home";
import PageNotFound from "./components/pages/PageNotFound";
import Dashboard from "./components/pages/Dashboard";
import Login from "./components/pages/Login";
import AddBooks from "./components/pages/AddBooks";
import SignUp from "./components/pages/SignUp";

export default function App() {
  return (
      <>
          <BrowserRouter>
              <Routes>
                  <Route path='/' element={<Home />} />
                  <Route path='/sign-up' element={<SignUp />} />
                  <Route path='/login' element={<Login />} />
                  <Route path='/dashboard' element={<Dashboard />} />
                  <Route path='/dashboard/add-books' element={<AddBooks />} />
                  <Route path='*' element={<PageNotFound />} />
              </Routes>
          </BrowserRouter>
      </>
  )
}

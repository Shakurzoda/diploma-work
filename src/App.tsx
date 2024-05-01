import Header from './Component/Header/Header'
import CoursesPage from './pages/CorsesPage/CorsesPage';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/HomePage/Home';
import AddCourses from './pages/AddCoursesPage/AddCourses';


function App() {

  return (
    <div className='App'>
      <BrowserRouter> 
      <Header/>
      <main>
        <Routes>
        <Route path="/courses" element={<CoursesPage />} />
        <Route path="/" element={<Home/>} />
        <Route path="/addcourses" element={<AddCourses/>} />
      </Routes>
      </main>
      </BrowserRouter>
    </div>
  )
}

export default App


import './App.css'
import NavBar from './components/NavBar'
import { Router } from './router/router'


function App() {
  // console.log("ENV:", import.meta.env);
  // console.log("API:", import.meta.env.VITE_API_URL);

  return (
    <>
      <NavBar />
      <Router />
    </>
  )
}

export default App

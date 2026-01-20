
import './App.css'
import { Router } from './router/router'


function App() {
  // console.log("ENV:", import.meta.env);
  // console.log("API:", import.meta.env.VITE_API_URL);

  return (
    <>
      <Router />
    </>
  )
}

export default App

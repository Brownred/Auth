import { BrowserRouter, Route, Routes } from "react-router-dom";
import { About, Home, Login, Profile, SignUp } from "./pages/index";
import Header from "./components/header";


export default function App() {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/sign-up" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  )
}

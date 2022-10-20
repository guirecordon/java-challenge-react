import { Route, Routes } from "react-router-dom";
import { SignIn } from "./pages/SignIn";
import { Password } from "./pages/Password";
import { Logs } from "./pages/Logs";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route path="/password" element={<Password />} />
      <Route path="/logs" element={<Logs />} />
    </Routes>
  )
}
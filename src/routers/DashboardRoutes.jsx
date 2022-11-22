import { Route, Routes } from "react-router-dom"
import { TodosScreen } from "../pages/TodosScreen"
import { NavBar } from "../ui/NavBar"
import AdminPage from "../pages/AdminPage"
import UserPage from "../pages/UserPage"

export const DashboardRoutes = () => {
  return (
    <>
      <NavBar />
        <Routes>
          <Route path="/AdminPage" element={<AdminPage/>} />
          <Route path="/UserPage" element={<UserPage/>} />
          <Route path="/" element={<TodosScreen/>} />
        </Routes>
    </>
  )
}

import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomeLayout from "./layouts/HomeLayout";
import MainLayout from "./layouts/MainLayout";
import Restaurants from "./pages/Restaurants";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route index element={<HomeLayout />} />
          <Route path="/" element={<HomeLayout />} />
          <Route path="/restaurants" element={<Restaurants />} />
          <Route path="/rooms" element={<Restaurants />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;

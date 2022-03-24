import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { PageSearch } from "./pages/PageSearch";


export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/pagesearch" element={<PageSearch />} />
      <Route path="/" element={<Home />} />
    </Routes>
  );
};

import { Routes, Route, BrowserRouter } from "react-router-dom";

// Page component
import LandingPage from "../pages/LandingPage";
import { SearchPage } from "../pages/SearchPage";
import LayoutPage from "../pages/LayoutPage";
import { MeteoriteDetailPage } from "../pages/meteorite/[meteoriteId]/MeteoriteDetailPage.jsx";
// import { Navbar } from "../components/UI/Navbar";

export default function Routers() {
  return (
    <BrowserRouter>
      {/* <Navbar /> */}
      <Routes>
        <Route element={<LayoutPage />}>
          <Route index path="/" element={<LandingPage />} />
          <Route path="/searchpage" element={<SearchPage />} />
          <Route
            path="/meteorite/:meteoriteId"
            element={<MeteoriteDetailPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

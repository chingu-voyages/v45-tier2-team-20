import { Routes, Route, BrowserRouter } from "react-router-dom";

// Page component
import LandingPage from "../pages/Landing";

export default function Routers() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index path="/" element={<LandingPage />} />
      </Routes>
    </BrowserRouter>
  );
}

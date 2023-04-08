import {
  Routes,
  Route,
  useNavigationType,
  useLocation,
} from "react-router-dom";
import LOGINPAGE from "./pages/LOGINPAGE";
import PROJECTOVERVIEW from "./pages/PROJECTOVERVIEW";
import REGISTRATIONANDBIO from "./pages/REGISTRATIONANDBIO";
import MARKETPLACE from "./pages/MARKETPLACE";
import NEWSUPDATE from "./pages/NEWSUPDATE";
import HOMEPAGE from "./pages/HOMEPAGE";
import BUYDASHBOARDEXPANDED from "./pages/BUYDASHBOARDEXPANDED";
import PROJECT from "./pages/PROJECT";
import { useEffect } from "react";

function App() {
  const action = useNavigationType();
  const location = useLocation();
  const pathname = location.pathname;

  useEffect(() => {
    if (action !== "POP") {
      window.scrollTo(0, 0);
    }
  }, [action, pathname]);

  useEffect(() => {
    let title = "";
    let metaDescription = "";

    switch (pathname) {
      case "/":
        title = "";
        metaDescription = "";
        break;
      case "/project-overview":
        title = "";
        metaDescription = "";
        break;
      case "/registration-and-bio":
        title = "";
        metaDescription = "";
        break;
      case "/market-place":
        title = "";
        metaDescription = "";
        break;
      case "/news-update":
        title = "";
        metaDescription = "";
        break;
      case "/home-page":
        title = "";
        metaDescription = "";
        break;
      case "/buy-dash-board-expanded":
        title = "";
        metaDescription = "";
        break;
      case "/":
        title = "";
        metaDescription = "";
        break;
    }

    if (title) {
      document.title = title;
    }

    if (metaDescription) {
      const metaDescriptionTag = document.querySelector(
        'head > meta[name="description"]'
      );
      if (metaDescriptionTag) {
        metaDescriptionTag.content = metaDescription;
      }
    }
  }, [pathname]);

  return (
    <Routes>
      <Route path="/" element={<LOGINPAGE />} />
      <Route path="/project-overview" element={<PROJECTOVERVIEW />} />
      <Route path="/registration-and-bio" element={<REGISTRATIONANDBIO />} />
      <Route path="/market-place" element={<MARKETPLACE />} />
      <Route path="/news-update" element={<NEWSUPDATE />} />
      <Route path="/home-page" element={<HOMEPAGE />} />
      <Route
        path="/buy-dash-board-expanded"
        element={<BUYDASHBOARDEXPANDED />}
      />
      <Route path="/project" element={<PROJECT />} />
    </Routes>
  );
}
export default App;

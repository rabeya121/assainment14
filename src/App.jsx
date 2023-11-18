import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppFooter from "./component/AppFooter";
import AppNavBar from "./component/AppNavBar";
import Subscribe from "./component/Subscribe";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
import ServicePage from "./pages/ServicePage";
import TeamPage from "./pages/TeamPage";
import TestimonialsPage from "./pages/TestimonialsPage";

const App = () => {
  return (
    <BrowserRouter>
      <AppNavBar />
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}></Route>
        <Route path="/team" element={<TeamPage></TeamPage>}></Route>
        <Route path="/service" element={<ServicePage></ServicePage>}></Route>
        <Route path="/project" element={<ProjectPage></ProjectPage>}></Route>
        <Route
          path="/testimonial"
          element={<TestimonialsPage></TestimonialsPage>}
        ></Route>
      </Routes>
      <Subscribe />
      <AppFooter />
    </BrowserRouter>
  );
};

export default App;

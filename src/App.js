import { lazy, Suspense, useEffect, useState } from "react";
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import Loading from "./Components/Loading";
import Home from "./Components/Home";
import SharedLayout from "./Components/SharedLayout";

// Only the home page ships in the first bundle; other pages load on demand.
const About = lazy(() => import("./Components/About"));
const Experience = lazy(() => import("./Components/Experience"));
const Project = lazy(() => import("./Components/Project"));
const Contact = lazy(() => import("./Components/Contact"));
const Certification = lazy(() => import("./Components/Certification"));
const Resume = lazy(() => import("./Components/Resume"));

const titles = {
  "/": "Ifeoluwa Sanni — Lead Full-Stack Blockchain Developer",
  "/about": "About — Ifeoluwa Sanni",
  "/projects": "Projects — Ifeoluwa Sanni",
  "/experience": "Experience & Open Source — Ifeoluwa Sanni",
  "/certificates": "Certifications — Ifeoluwa Sanni",
  "/resume": "Resume — Ifeoluwa Sanni",
  "/contact": "Contact — Ifeoluwa Sanni",
};

// Sets the tab title and resets scroll on every navigation.
const RouteEffects = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    document.title = titles[pathname] || titles["/"];
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const hasSeenIntro = () => {
  try {
    return sessionStorage.getItem("intro-seen") === "1";
  } catch {
    return false;
  }
};

function App() {
  // The intro animation plays once per browser session, not on every reload.
  const [loading, setLoading] = useState(() => !hasSeenIntro());

  return (
    <main className="bg-[#0a192f] text-[#FF5823] py-5 px-5 md:px-5 relative">
      {loading ? (
        <Loading setLoading={setLoading} />
      ) : (
        <BrowserRouter>
          <RouteEffects />
          <Suspense fallback={<div className="min-h-screen" />}>
            <Routes>
              <Route path="/" element={<SharedLayout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="experience" element={<Experience />} />
                <Route path="contact" element={<Contact />} />
                <Route path="certificates" element={<Certification />} />
                <Route path="projects" element={<Project />} />
                <Route path="resume" element={<Resume />} />
                <Route path="*" element={<Home />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      )}
    </main>
  );
}

export default App;

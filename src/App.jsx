import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css";
import { Button } from "./components/ui/button";
import AppLayout from "./layouts/add-layout";
import LandingPage from "./pages/landing";
import Onboarding from "./pages/onboarding";
import Joblisting from "./pages/joblisting";
import Job from "./pages/job";
import PostJob from "./pages/post-job";
import SaveJob from "./pages/save-job";
import MyJobs from "./pages/my-jobs";

function App() {
  const router = createBrowserRouter([
    {
      element: <AppLayout />,
      children: [
        {
          path: "/",
          element: <LandingPage />,
        },
        {
          path: "/onboarding",
          element: <Onboarding />,
        },
        {
          path: "/jobs",
          element: <Joblisting />,
        },
        {
          path: "/job/:id",
          element: <Job />,
        },
        {
          path: "/post-job",
          element: <PostJob />,
        },
        {
          path: "/saved-job",
          element: <SaveJob />,
        },
        {
          path: "/my-jobs",
          element: <MyJobs />,
        },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;

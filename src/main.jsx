import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import { AboutPage } from "./pages/aboutPage.jsx";
import { HomePage } from "./pages/homePage.jsx";
import { ContactPage } from "./pages/contactPage.jsx";
import { CausesPage } from "./pages/causesPage.jsx";
import { DonatePage } from "./pages/donatePage.jsx";
import { VolunteerPage } from "./pages/volunteerPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index:true,
        element: <HomePage />,
      },
      {
        path: "/about",
        element: <AboutPage />,
      },
      {
        path: "/contact",
        element: <ContactPage />,
      },
      {
        path: "/causes",
        element: <CausesPage />,
      },
      {
        path:"/donate",
        element:<DonatePage/>,
      },
      {
        path:"/volunteer",
        element:<VolunteerPage/>,
      }
    ],
  },
  {
    path: "*",
    element: <p>Page Not found</p>,
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);

import "./styles.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import ContactUs from "./pages/ContactUs";
import ErrorPage from "./pages/ErrorPage";
import RootLayout from "./pages/RootLayout";

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: <ErrorPage />,
      children: [
        { path: "/", element: <HomePage /> },
        { path: "/about", element: <About /> },
        { path: "/contactus", element: <ContactUs /> },
      ],
    },
  ]);
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";
import TestPage from "./pages/TestPage";
import TestPageTwo from "./pages/TestPageTwo";


const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: "/game",
        element: <GamePage />,
        
      },
      {
        path: "/test",
        element: <TestPage />
      },
      {
        path: "testtwo",
        element: <TestPageTwo/>
      }
    ]
  }
])



function App() {
  

  return (
    <RouterProvider router={router} />
  )
}

export default App

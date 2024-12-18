import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./pages/Root";
import HomePage from "./pages/HomePage";
import GamePage from "./pages/GamePage";

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
    ]
  }
])



function App() {
  

  return (
    <RouterProvider router={router} />
  )
}

export default App

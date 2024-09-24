import Login from "./pages/auth/login";
import Signup from "./pages/auth/signup";
import Main from "./components/main";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

const appRouter = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/*" element={<Main />} />
    </>
  )
);
function App() {
  return (
    <>
      return <RouterProvider router={appRouter} />;
    </>
  );
}

export default App;

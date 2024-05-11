import "./App.css";
import Body from "../src/Components/Body";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Header from "./Components/Header";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import TopRated from "./Components/TopRated";
import Upcoming from "./Components/Upcoming";
import ReactDOM from "react-dom/client";
import MainContainer from "./Components/MainContainer";
import FilterData from "./Components/FilterData";

const App = () => {
  return (
    <Provider store={appStore}>
      <div>
        <Header />
       <Outlet />
      </div>
    </Provider>
  );
};
const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/topRated",
        element: <TopRated />,
      },
      {
        path: "/upcoming",
        element: <Upcoming />,
      },
      {
        path:"mainContainer",
        element:<MainContainer />
      },
      {
        path:"filterData",
        element:<FilterData />
      }
    ],
  },
]);
const root=ReactDOM.createRoot(document.getElementById("root"))
root.render(<RouterProvider router={appRouter}/>)
export default App;

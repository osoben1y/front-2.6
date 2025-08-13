import { memo } from "react";
import { useRoutes } from "react-router-dom";
import Layout from "./Layout";
import Home from "./home";
import Cart from "./cart";
import WishLists from "./wishLists";

const MainRouters = () => {
  return (
    <>
      {useRoutes([
        {
          path: "/",
          element: <Layout />,
          children: [
            {
              index: true,
              element: <Home />,
            },
            {
              path: "wishes",
              element: <WishLists />,
            },
            {
              path: "cart",
              element: <Cart />,
            },
          ],
        },
      ])}
    </>
  );
};

export default memo(MainRouters);

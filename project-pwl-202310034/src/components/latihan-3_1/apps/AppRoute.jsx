import React from "react";
import { Route, Routes } from "react-router-dom";
import Layouts from "../layouts/Layouts";
import Home from "../modules/components/homes/Home";
import Explore from "../modules/components/explore/Explore";
import Message from "../modules/components/messages/Messages";
import Feeds from "../modules/components/explore/widgets/Feeds";
import Reels from "../modules/components/explore/widgets/Reels";
import FYP from "../modules/components/explore/widgets/FYP";
import Profiles from "../modules/components/profiles/profiles";
import Login from "../modules/components/login/Login";
import Errors from "../layouts/components/errors/Errors";

export default function AppRoute() {
  const routing = [
    { path: "home", element: Home },
    {
      path: "explore",
      element: Explore,
      subExplore: [
        { path: "feeds", element: Feeds },
        { path: "reels", element: Reels },
        { path: "fyp", element: FYP },
      ],
    },
    { path: "messages", element: Message },
    { path: "profile", element: Profiles },
  ];
  return (
    <Routes>
      {routing.map((v) => (
        <Route
          path={v.path}
          element={
            <Layouts>
              <v.element />
            </Layouts>
          }
        >
          {v.subExplore &&
            v.subExplore.map((routeChild) => (
              <Route path={routeChild.path} element={<routeChild.element />} />
            ))}
        </Route>
      ))}
      <Route index element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route
        path="*"
        element={
          <Layouts>
            <Errors />
          </Layouts>
        }
      ></Route>
    </Routes>
  );
}

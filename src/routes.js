import { lazy } from "react";
import { ANOTHERONE_ROUTE, ANOTHERTHREE_ROUTE, ANOTHERTWO_ROUTE, DIAMOND_ROUTE, FORUM_ROUTE, LOGO_ROUTE, MAIN_ROUTE, STUDIO_ROUTE } from "./utils/consts";

const AnotherOne = lazy(() => import("./pages/anotherOne/AnotherOne"));
const AnotherThree = lazy(() => import("./pages/anotherThree/AnotherThree"));
const AnotherTwo = lazy(() => import("./pages/anotherTwo/AnotherTwo"));
const Diamond = lazy(() => import("./pages/diamond/Diamond"));
const Forum = lazy(() => import("./pages/forum/Forum"));
const Logotypes = lazy(() => import("./pages/logotypes/Logotypes"));
const MainPage = lazy(() => import("./pages/mainpage/MainPage"));
const Studio = lazy(() => import("./pages/studio/Studio"));

export const PublicRoutes = [
    {
        path: MAIN_ROUTE,
        Component: MainPage
    },
    {
        path: FORUM_ROUTE,
        Component: Forum
    },
    {
        path: LOGO_ROUTE,
        Component: Logotypes
    },
    {
        path: STUDIO_ROUTE,
        Component: Studio
    },
    {
        path: DIAMOND_ROUTE,
        Component: Diamond
    },
    {
        path: ANOTHERONE_ROUTE,
        Component: AnotherOne
    },
    {
        path: ANOTHERTWO_ROUTE,
        Component: AnotherTwo
    },
    {
        path: ANOTHERTHREE_ROUTE,
        Component: AnotherThree
    },
]

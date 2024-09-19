import AnotherOne from "./pages/anotherOne/AnotherOne";
import AnotherThree from "./pages/anotherThree/AnotherThree";
import AnotherTwo from "./pages/anotherTwo/AnotherTwo";
import Diamond from "./pages/diamond/Diamond";
import Forum from "./pages/forum/Forum";
import Logotypes from "./pages/logotypes/Logotypes";
import MainPage from "./pages/mainpage/MainPage";
import Studio from "./pages/studio/Studio";
import { ANOTHERONE_ROUTE, ANOTHERTHREE_ROUTE, ANOTHERTWO_ROUTE, DIAMOND_ROUTE, FORUM_ROUTE, LOGO_ROUTE, MAIN_ROUTE, STUDIO_ROUTE } from "./utils/consts";

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
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {superbase} from "./lib/helper/superbaseClient.ts";
import {useEffect} from "react";
import {useUser} from "./store/userStore.ts";
import SideNav from "./components/Nav/SideNav.tsx";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./components/Home/Home.tsx";
import Today from "./components/Today/Today.tsx";
import Calendar from "./components/Calendar/Calendar.tsx";
import Completed from "./components/Completed/Completed.tsx";
import Trash from "./components/Trash/Trash.tsx";

const queryClient = new QueryClient();
const router = createBrowserRouter([
    {
        path: "/",
        element: <SideNav/>,
        children: [
            {
                index: true,
                element: <Home/>,
            },
            {
                path: "today",
                element: <Today/>
            },
            {
                path: "calendar",
                element: <Calendar/>
            },
            {
                path: "completed",
                element: <Completed/>
            },
            {
                path: "trashbin",
                element: <Trash/>
            },
        ]
    },

]);


function App() {

    //TODO: to implement  dedicated login system
    const {setUser} = useUser();


    useEffect(() => {
        const fetchUser = async () => {
            const session = await superbase.auth.getUser();
            setUser(session.data.user);
        };
        fetchUser();
    });


    return (
        <QueryClientProvider client={queryClient}>
            <RouterProvider router={router}/>
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    );
}

export default App;
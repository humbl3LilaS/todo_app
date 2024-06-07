import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {superbase} from "./lib/helper/superbaseClient.ts";
import {useEffect} from "react";
import {useUser} from "./store/userStore.ts";
import SideNav from "./components/Nav/SideNav.tsx";

const queryClient = new QueryClient();

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
            <SideNav/>
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    );
}

export default App;
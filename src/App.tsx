import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";
import {superbase} from "./lib/helper/superbaseClient.ts";
import {useEffect, useState} from "react";

const queryClient = new QueryClient();

function App() {

    const [user, setUser] = useState<any>(null);

    const login = async () => {
        await superbase.auth.signInWithOAuth({
            provider: "github"
        });
    };

    useEffect(() => {
        const session = superbase.auth.getUser();
        session.then(data => setUser(data.data?.user));
    }, []);


    return (
        <QueryClientProvider client={queryClient}>
            <h1 className={"font-black text-cyan-900 text-3xl"}>Hello todo app</h1>
            {user && <h1>Authenticated....</h1>}
            <button onClick={login}>login with github</button>
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    );
}

export default App;
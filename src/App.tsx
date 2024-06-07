import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {ReactQueryDevtools} from "@tanstack/react-query-devtools";

const queryClient = new QueryClient();

function App() {



    return (
        <QueryClientProvider client={queryClient}>
            <h1 className={"font-black text-cyan-900 text-3xl"}>Hello todo app</h1>
            <ReactQueryDevtools initialIsOpen={false}/>
        </QueryClientProvider>
    );
}

export default App;
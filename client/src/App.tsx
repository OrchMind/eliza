import "./index.css";
import {Document} from "@/Document";
import {WithSettings} from "@/store/app-settings";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import useVersion from "./hooks/use-version";

const queryClient = new QueryClient({
    defaultOptions: {
        queries: {
            staleTime: Number.POSITIVE_INFINITY,
        },
    },
});

function App() {
    useVersion();
    return (
        <QueryClientProvider client={queryClient}>
            <WithSettings>
                <Document/>
            </WithSettings>
        </QueryClientProvider>
    );
}

export default App;

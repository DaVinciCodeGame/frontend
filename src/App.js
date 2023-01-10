import "./App.css";
import Router from "./share/Router";
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
const queryClient = new QueryClient();

if (process.env.REACT_APP_NODE_ENV === "production") {
  disableReactDevTools();
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <Router />
      </div>
      <ReactQueryDevtools />
    </QueryClientProvider>
  );
}

export default App;

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./app.css";

function Main() {
  return <div>Hello World!</div>;
}

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      refetchOnMount: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  );
}

export default App;

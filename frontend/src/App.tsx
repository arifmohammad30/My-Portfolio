import { Switch, Route } from "wouter";
import Home from "./pages/Home";
import NotFound from "./pages/not-found";

function App() {
  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Switch>
        <Route path="/" component={Home} />
        <Route component={NotFound} />
      </Switch>
    </div>
  );
}

export default App;

import Aside from "./components/aside";
import GridLayout from "./components/layouts/grid";
import { UserContextProvider } from "./context";
import "./styles/app.css";
function App() {
  return (
    <UserContextProvider>
      <main className="container">
        <Aside />
        <GridLayout />
      </main>
    </UserContextProvider>
  );
}

export default App;

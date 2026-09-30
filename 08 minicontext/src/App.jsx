import "./App.css";
import Login from "./Component/Login";   //components (only s missing then error)
import Profile from "./Component/Profile";
import UserContextProvider from "./context/UserContextProvider";

function App() {
  return (
    <UserContextProvider>
      <h1>RV Coding with React Share Information</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
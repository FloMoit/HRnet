import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import Header from "./components/Header.jsx";
import UsersTable from "./components/UsersTable.js";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/UsersTable" element={<UsersTable />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

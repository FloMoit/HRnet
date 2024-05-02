import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Table from "./pages/Table";
import { Provider } from "react-redux";
import { store } from "./redux/store.js";
import Header from "./components/Header.jsx";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/UsersTable" element={<Table />} />
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;

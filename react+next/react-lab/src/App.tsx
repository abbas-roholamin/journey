import { Route, Routes } from "react-router";
import { Home, UseActionStateExample } from "./pages";
import Layout from "./layout/Layout";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="use-action-state" element={<UseActionStateExample />} />
      </Route>
    </Routes>
  );
}

export default App;

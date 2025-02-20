import "../src/style.css";

import { publicRoute } from "./routes/routes";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <div>
        <Routes>
          {publicRoute.map(({ path, element, id }) => (
            <Route key={id} path={path} element={element} />
          ))}
        </Routes>
      </div>
    </>
  );
}

export default App;

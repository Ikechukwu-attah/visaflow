import { Routes, Route } from "react-router-dom";
import { publicRoute, userRoutes } from "./routes/routes";

function App() {
  return (
    <div>
      <Routes>
        {publicRoute.map(({ path, element, id, children }) => (
          <Route key={id} path={path} element={element}>
            {children &&
              children.map((child) => (
                <Route
                  key={child.id}
                  index={child.index}
                  path={child.path}
                  element={child.element}
                />
              ))}
          </Route>
        ))}

        <Route path={userRoutes.path} element={userRoutes.element}>
          {userRoutes.children?.map(({ path, id, element, index }) => (
            <Route key={id} path={path} index={index} element={element} />
          ))}
        </Route>
      </Routes>
    </div>
  );
}

export default App;

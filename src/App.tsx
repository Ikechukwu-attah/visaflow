import { Routes, Route } from "react-router-dom";
import { adminRoutes, publicRoutes, userRoutes } from "./routes/routes";
import PrivateRoute from "./authentication/PrivateRoute";
import AdminRoute from "./authentication/AdminRoute";

function App() {
  return (
    <Routes>
      {/* Public Routes */}
      {publicRoutes.map(({ id, path, element }) => (
        <Route key={id} path={path} element={element} />
      ))}

      <Route element={<PrivateRoute />}>
        <Route path={userRoutes.path} element={userRoutes.element}>
          {userRoutes.children?.map(({ path, id, element, index }) => (
            <Route key={id} path={path} index={index} element={element} />
          ))}
        </Route>
      </Route>

      {/* Admin Routes */}
      <Route element={<AdminRoute />}>
        {adminRoutes.map(({ path, id, element, children }) => (
          <Route key={id} path={path} element={element}>
            {children?.map((child) => (
              <Route
                key={child.id}
                index={child.index}
                path={child.path}
                element={child.element}
              />
            ))}
          </Route>
        ))}
      </Route>
      <Route path="*" element={<div>Not Found</div>} />
    </Routes>
  );
}

export default App;

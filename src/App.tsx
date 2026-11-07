import { Route, Routes } from 'react-router';
import { Layout } from './components/Layout';
import { notFound, routes } from './routes';

export function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map((route) => (
          <Route key={route.path} path={route.path} element={route.element} />
        ))}
        <Route path="*" element={notFound.element} />
      </Route>
    </Routes>
  );
}

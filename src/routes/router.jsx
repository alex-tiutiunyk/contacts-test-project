import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Root from './Root';
import ErrorPage from './ErrorPage';
import Contacts from './Contacts';
import Contact from './Contact';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />
  },
  {
    path: "contacts",
    element: <Contacts />
  },
  {
    path: "contacts/:contactId",
    element: <Contact />
  }
]);

export const App = () => <RouterProvider router={router} />
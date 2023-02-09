import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from '@pages/MainPage';
import loaderProductsList from '@loaders/loaderProductsList';
import loaderProductsItem from '@loaders/loaderProductsItem';
import Products from '@components/Products/Products';
import ProductsItem from '@components/ProductsItem/ProductsItem';
import Cart from '@components/Cart/Cart';
import LoginForm from '@components/LoginForm/LoginForm';
import ErrorPage from '@pages/ErrorPage';
import Error from '@components/Error/Error';
import Order from '@components/Order/Order';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    children: [
      {
        index: true,
        element: <Products />,
        loader: loaderProductsList,
        errorElement: <Error />,
      },
      {
        path: 'products/:id',
        element: <ProductsItem />,
        loader: loaderProductsItem,
        errorElement: <Error />,
      },
      {
        path: 'cart',
        element: <Cart />,
      },
      {
        path: 'login',
        element: <LoginForm />,
      },
      {
        path: 'order',
        element: <Order />,
      },

      {
        path: '*',
        element: <ErrorPage />,
      },
    ],
  },
]);

export const App = () => <RouterProvider router={router} />;

export default App;

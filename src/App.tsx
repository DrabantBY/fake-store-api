import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/MainPage';
import loaderProductsList from './loaders/loaderProductsList';
import loaderProductsItem from './loaders/loaderProductsItem';
import Products from './components/Products/Products';

import ProductsItem from './components/ProductsItem/ProductsItem';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    children: [
      {
        index: true,
        element: <Products />,
        loader: loaderProductsList,
      },
      {
        path: 'products/:id',
        element: <ProductsItem />,
        loader: loaderProductsItem,
      },
    ],
  },
]);

export const App = () => <RouterProvider router={router} />;

export default App;

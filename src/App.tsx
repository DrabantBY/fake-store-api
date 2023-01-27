import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/MainPage';
import loaderProductsList from './loaders/loaderProductsList';
import loaderProductsCategory from './loaders/loaderProductsCategory';
import Products from './components/Products/Products';
import ProductsList from './components/Products/ProductsList';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainPage />,
    children: [
      {
        path: '/',
        element: <Products />,
        children: [
          {
            index: true,
            element: <ProductsList />,
            loader: loaderProductsList,
          },
          {
            path: '/category/:category',
            element: <ProductsList />,
            loader: loaderProductsCategory,
          },
        ],
      },
    ],
  },
]);

export const App = () => <RouterProvider router={router} />;

export default App;

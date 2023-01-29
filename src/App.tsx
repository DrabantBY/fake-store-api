import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import MainPage from './pages/MainPage';
import loaderProductsList from './loaders/loaderProductsList';
import loaderProductsCategory from './loaders/loaderProductsCategory';
import Products from './components/Products/Products';
import ProductsList from './components/Products/ProductsList';
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
        // loader: loaderProductsCategory,
      },
    ],
  },
]);

export const App = () => <RouterProvider router={router} />;

export default App;

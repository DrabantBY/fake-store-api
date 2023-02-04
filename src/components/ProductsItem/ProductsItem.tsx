import { Suspense } from 'react';
import { useLoaderData, Await } from 'react-router-dom';
import Spinner from '../Products/Spinner';
import ProductsItemCard from './ProductsItemCard';
import { ProductInterface } from '../../types';
import ProductsSlider from './ProductsSlider';

const ProductsItem = () => {
  const { response } = useLoaderData() as { response: Promise<ProductInterface> };

  return (
    <Suspense fallback={<Spinner />}>
      <Await resolve={response}>
        {(data: ProductInterface) => {
          const { images } = data;

          return (
            <div className="row row-cols-1 row-cols-md-2">
              <div className="col">
                <ProductsSlider images={images} />
              </div>
              <div className="col">
                <ProductsItemCard product={data} />
              </div>
            </div>
          );
        }}
      </Await>
    </Suspense>
  );
};

export default ProductsItem;

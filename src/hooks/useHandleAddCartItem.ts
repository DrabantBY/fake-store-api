import { useState } from 'react';
import useCartState from '../state';
import { ProductInterface } from '../type';

const useHandleAddCartItem = (product: ProductInterface): [boolean, () => void] => {
  const [removeCartItem, addCartItem, isCartItem] = useCartState((state) => [
    state.removeCartItem,
    state.addCartItem,
    state.isCartItem,
  ]);

  const [state, setState] = useState(isCartItem(product.id));

  const handleClick = () => {
    if (state) {
      removeCartItem(product.id);
    } else {
      addCartItem(product);
    }
    setState(!state);
  };
  return [state, handleClick];
};

export default useHandleAddCartItem;

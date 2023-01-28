import { useState, useEffect, useRef } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import getCategories from '../../api/getCategories';

const Categories = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [searchParams] = useSearchParams();
  const ref = useRef(true);
  const queryString = `/?${searchParams.toString()}`;

  useEffect(() => {
    if (ref.current) {
      getCategories().then(setCategories);
      ref.current = !ref.current;
    }
  }, []);

  return (
    <div className="list-group list-group-flush mb-3">
      <NavLink className="list-group-item list-group-item-action" to={queryString}>
        all goods
      </NavLink>
      {categories.map((category) => (
        <NavLink
          key={category}
          className="list-group-item list-group-item-action"
          to={`category/${category}${queryString}`}>
          {category.split('-').at(-1)}
        </NavLink>
      ))}
    </div>
  );
};

export default Categories;

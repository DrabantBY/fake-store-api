import { useState, useEffect } from 'react';
import { NavLink, useSearchParams } from 'react-router-dom';
import getCategories from '../../api/getCategories';

const Categories = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [searchParams] = useSearchParams();
  const queryString = `/?${searchParams.toString()}`;

  useEffect(() => {
    (async () => {
      const data = await getCategories();
      setCategories(data);
    })();
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

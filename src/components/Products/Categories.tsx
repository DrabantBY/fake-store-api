import { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import getCategories from '../../api/getCategories';

const Categories = () => {
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getCategories();
      setCategories(data);
    })();
  }, []);

  return (
    <ul>
      {categories.map((category) => (
        <li key={category}>
          <NavLink to={`category/${category}/?asdf=asdf`}>{category}</NavLink>
        </li>
      ))}
      <li>
        <NavLink to="/">all categories</NavLink>
      </li>
    </ul>
  );
};

export default Categories;

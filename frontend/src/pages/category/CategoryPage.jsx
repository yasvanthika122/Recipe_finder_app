import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import Card from '../home/Card';

const CategoryPage = () => {
  const { category } = useParams();
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategoryData = async () => {
      setLoading(true);
      try {
        const response = await axios.get(`http://localhost:5000/api/categories/${category}`);
        setItems(response.data);
      } catch (error) {
        setError(error.message || "Error loading category");
      }
      setLoading(false);
    };

    fetchCategoryData();
  }, [category]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className='mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8'>
      {items && items.map((item) => (
        <Card key={item._id} item={item} />
      ))}
    </div>
  );
};

export default CategoryPage;

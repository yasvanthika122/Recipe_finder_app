import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './home/Card';
const Search = () => {
    const [query, setQuery] = useState('');
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    useEffect(() => {
        const params = new URLSearchParams(window.location.search);
        const queryParam = params.get('query');
        if (queryParam) {
            setQuery(queryParam);
        }
    }, []);

    useEffect(() => {
        const fetchItems = async () => {
            setLoading(true);
            try {
                const response = await axios.get('http://localhost:5000/api/items', {
                    params: { q: query }
                });
                setResults(response.data);
            } catch (err) {
                setError(err.message || 'Error fetching data');
            } finally {
                setLoading(false);
            }
        };

        if (query) {
            fetchItems();
        }
    }, [query]);

    const handleSearchChange = (e) => {
        setQuery(e.target.value);
    };

    console.log(results);

    return (
        <div className='px-6 lg:px-12 py-20'>
            <h1 className='text-center text-3xl py-10 font-semibold text-secondary sm:text-6xl sm:leading-relaxed'>
                Search
            </h1>
            <div className='bg-white md:max-w-3xl mx-auto p-4 rounded relative flex items-center'>
                <input
                    type='text'
                    value={query}
                    onChange={handleSearchChange}
                    className='w-full px-4 py-2'
                    placeholder='Search items...'
                />
            </div>
            <div>
      {loading && <div>Loading...</div>}
      {error && <div>Unknown Error Happens...</div>}
      
      <ul className="mt-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
        {results && results.map((item) => (
          <Card item={item} key={item._id} />
        ))}
      </ul>
    </div>
        </div>
    );
};

export default Search;

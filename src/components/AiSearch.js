import React, { useState } from 'react';
import axios from 'axios';

function AISearch() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState([]);

  const handleSearch = async () => {
    const response = await axios.post('YOUR_AI_API_ENDPOINT', { query });
    setResults(response.data.results);
  };

  return (
    <div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="I am having issues in my sink..."
      />
      <button onClick={handleSearch}>Search</button>
      <div>
        {results.map(result => (
          <div key={result.id}>
            <h2>{result.title}</h2>
            <p>{result.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default AISearch;

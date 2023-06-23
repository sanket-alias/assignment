import React, { useEffect, useState } from 'react';
import axios from 'axios';
import ListView from './ListView';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS

function App() {
  const [data, setData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://reqres.in/api/users?page=2');
      setData(response.data.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredData = data.filter((item) =>
    item.first_name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1 className="my-4">User List</h1>
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search by first name"
        value={searchTerm}
        onChange={handleSearch}
      />
      <ListView data={filteredData} />
    </div>
  );
}

export default App;

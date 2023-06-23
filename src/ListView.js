import React from 'react';

function ListView({ data }) {
  return (
    <div>
      {data.length > 0 ? (
        <div className="row">
          {data.map((item) => (
            <div key={item.id} className="col-md-4 mb-4">
              <div className="card">
                <img src={item.avatar} className="card-img-top" alt="avatar" />
                <div className="card-body">
                  <h5 className="card-title">ID: {item.id}</h5>
                  <p className="card-text">First Name: {item.first_name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <p>No matching results found.</p>
      )}
    </div>
  );
}

export default ListView;

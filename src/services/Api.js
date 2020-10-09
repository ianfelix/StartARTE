import React from 'react';

const Api = ({ state }) => {
  if (!state) return null;
  return (
    <div className='map-api'>
      <iframe
        width='100%'
        height='250'
        title='map'
        frameBorder='0'
        src={`https://www.google.com/maps/embed/v1/search?key=AIzaSyBdLA5q-3gFOjMOlKEKdrKRvAde0uhOlC8&q=${state}`}
        allowfullscreen></iframe>
    </div>
  );
};

export default Api;

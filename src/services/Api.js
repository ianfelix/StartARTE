import React from 'react';

const Api = ({ state }) => {
  if (!state) return null;
  return (
    <>
      <iframe
        title='map'
        width='300'
        height='300'
        frameBorder='0'
        src={`https://www.google.com/maps/embed/v1/search?key=AIzaSyBdLA5q-3gFOjMOlKEKdrKRvAde0uhOlC8&q=${state}`}
        allowfullscreen></iframe>
    </>
  );
};

export default Api;

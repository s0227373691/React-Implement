import React from 'react';

const Card = ({ id, name, email }) => {
  return (
    <div className='tc bg-light-green dib pa3 ma2 br3 bw2 grow shadow-5'>
      <img src={`https://robohash.org/${id}?size=200x200`} alt='robot' />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  );
};

export default Card;

import React from 'react';
import '../rockets.css';

const rocketsData = [
  {
    id: 1,
    name: 'Falcon 1',
    description:
      'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
  },
  {
    id: 2,
    name: 'Falcon 2',
    description:
      'The Falcon 1 was an expendable launch system privately developed and manufactured by SpaceX during 2006-2009. On 28 September 2008, Falcon 1 became the first privately-developed liquid-fuel launch vehicle to go into orbit around the Earth.',
  },
];

const Rockets = () => (
  <div className="roc-container">
    {rocketsData.map((rocket) => (
      <div key={rocket.id} className="roc-card">
        <img
          src={`rocket-image-url-${rocket.id}.jpg`}
          alt={rocket.name}
          className="roc-image"
        />
        <div className="roc-info">
          <h2>{rocket.name}</h2>
          <p>{rocket.description}</p>
          <button type="button" className="reserve-button">Reserve Rocket</button>
        </div>
      </div>
    ))}
  </div>
);

export default Rockets;

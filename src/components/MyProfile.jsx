import React from 'react';
import { useSelector } from 'react-redux';
import '../profile.css';

const MyProfile = () => {
  const userReservedRockets = useSelector((
    state,
  ) => state.rockets.filter((rocket) => rocket.reserved));

  return (
    <div className="profile-container">
      <h2>My Profile</h2>
      <div className="profile-content">
        <div className="reserved-rockets">
          <table>
            <thead>
              <tr>
                <th>Rocket Title</th>
              </tr>
            </thead>
            <tbody>
              {userReservedRockets.map((rocket) => (
                <tr key={rocket.id}>
                  <td>{rocket.title}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;

import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Profile = () => {
  const { missionsJoined } = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  useEffect(() => {
    if (missionsJoined === 0) {
      dispatch(missionsJoined);
    }
  }, [dispatch, missionsJoined]);

  return (
    <section>
      <div>
        <h2>My Missions</h2>
        <div className="mission-profile_joined">
          {missionsJoined.length === 0 ? (
            <span>No missions joined!</span>
          ) : (
            missionsJoined.map((mission) => (
              <span key={mission.mission_id}>{mission.mission_name}</span>
            ))
          )}
        </div>
      </div>
      <div>For Rockets</div>
    </section>
  );
};

export default Profile;

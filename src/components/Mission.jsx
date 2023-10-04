import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMissions, joinMission, leaveMission } from '../redux/missions/missionsSlice';
import '../missions.css';

const Mission = () => {
  const { missions, isLoading, isError } = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  useEffect(() => {
    // Fetch missions if the array is empty
    if (missions.length === 0) {
      dispatch(fetchMissions());
    }
  }, [dispatch, missions.length]);

  /**
   * Handles the "Join Mission" button click.
   * @param {number} missionID - The ID of the mission to join.
   * @param {string} missionName - The name of the mission.
   */
  const handleClickJoinMission = (missionID) => {
    dispatch(joinMission(missionID));
  };

  /**
   * Handles the "Leave Mission" button click.
   * @param {number} missionID - The ID of the mission to leave.
   */
  const handleClickLeaveMission = (missionID) => {
    dispatch(leaveMission(missionID));
  };

  return (
    <section className="mission-container">
      {isLoading && <p>Loading</p>}
      {missions && missions.length !== 0 && (
        <table className="mission-constainer_table">
          <thead>
            <tr>
              <th>Mission</th>
              <th>Description</th>
              <th>Status</th>
              <th>{' '}</th>
            </tr>
          </thead>
          <tbody>
            {missions.map((mission) => (
              <tr key={mission.mission_id} id={mission.mission_id}>
                <td>{mission.mission_name}</td>
                <td className="mission-description">{mission.description}</td>
                <td className="mission-status">
                  {mission.reserved ? (
                    <span className="mission-status_active">Active Member</span>
                  ) : (
                    <span className="mission-status_inactive">NOT A MEMBER</span>
                  )}
                </td>
                {mission.reserved ? (
                  <td className="mission-status">
                    <button
                      type="button"
                      title="Leave Mission"
                      className="mission-status_button mission-status_leave"
                      onClick={() => handleClickLeaveMission(mission.mission_id)}
                    >
                      Leave Mission
                    </button>
                  </td>
                ) : (
                  <td className="mission-status">
                    <button
                      type="button"
                      title="Join Mission"
                      className="mission-status_button mission-status_join"
                      onClick={() => handleClickJoinMission(
                        mission.mission_id,
                      )}
                    >
                      Join Mission
                    </button>
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}
      {isError && (
        <p>
          ERROR:
          {' '}
          {isError}
        </p>
      )}
    </section>
  );
};

export default Mission;

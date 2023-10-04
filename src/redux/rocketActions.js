export const fetchRockets = (rockets) => ({
  type: 'FETCH_ROCKETS',
  payload: rockets,
});

export const reserveRocket = (rocketId) => ({
  type: 'RESERVE_ROCKET',
  payload: rocketId,
});

export const cancelReservation = (rocketId) => ({
  type: 'CANCEL_RESERVATION',
  payload: rocketId,
});

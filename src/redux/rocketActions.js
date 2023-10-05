export const fetchRockets = (rockets) => ({
  type: 'FETCH_ROCKETS',
  payload: rockets,
});

export const reserveRocket = (rocketId, rocketTitle) => ({
  type: 'RESERVE_ROCKET',
  payload: { id: rocketId, title: rocketTitle },
});

export const cancelReservation = (rocketId) => ({
  type: 'CANCEL_RESERVATION',
  payload: rocketId,
});

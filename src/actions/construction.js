import { SET_GROUND, SET_ROAD, SET_BUILDING, SET_OBJECT, SHOW_ADVERTISEMENT, HIDE_ADVERTISEMENT } from './types';

export const setGround = value => dispatch => {
  dispatch({
    type: SET_GROUND,
    payload: value
  });
};

export const setRoad = value => dispatch => {
  dispatch({
    type: SET_ROAD,
    payload: value
  });
};

export const setBuilding = value => dispatch => {
  dispatch({
    type: SET_BUILDING,
    payload: value
  });
};

export const setObject = value => dispatch => {
  dispatch({
    type: SET_OBJECT,
    payload: value
  });
};

export const showAdvertisement = value => dispatch => {
  dispatch({
    type: SHOW_ADVERTISEMENT
  });
};

export const hideAdvertisement = value => dispatch => {
  dispatch({
    type: HIDE_ADVERTISEMENT
  });
};
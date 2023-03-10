import { SET_GROUND, SET_ROAD, SET_BUILDING, SET_OBJECT, SHOW_ADVERTISEMENT, HIDE_ADVERTISEMENT } from '../actions/types';

const initialState = {
  ground: -1,
  road: -1,
  building: -1,
  object: -1,
  ads_show: false
};

export default (state = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case SET_GROUND:
      return {
        ...state,
        ground: payload
      };
    case SET_ROAD:
      return {
        ...state,
        road: payload
      };
    case SET_BUILDING:
      return {
        ...state,
        building: payload
      };
    case SET_OBJECT:
      return {
        ...state,
        object: payload
      };
    case SHOW_ADVERTISEMENT:
      return {
        ...state,
        ads_show: true
      };
    case HIDE_ADVERTISEMENT:
      return {
        ...state,
        ads_show: false
      };
    default:
      return state;
  }
};
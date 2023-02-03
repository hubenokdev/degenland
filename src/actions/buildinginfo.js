import axios from 'axios';
import * as env from "../env";

import { LOAD_BUILDING_INFO, SET_ENTERED, CLEAR_DATA, SET_GO_OUT } from './types';

export const loadBuildingInfo = (_address, _pos, _index, _sno) => async dispatch => {
  const res = await axios.get(env.SERVER_URL + "/api/placement/get_id?address=" + _address + "&pos=" + _pos + "&index=" + _index + "&sno=" + _sno);
  dispatch({
    type: LOAD_BUILDING_INFO,
    buildingId: res.data.buildingId,
    buildingInfo: res.data.buildingInfo,
    ownerInfo: res.data.ownerInfo
  });
};

export const setEntered = (flag) => async dispatch => {
  dispatch({
    type: SET_ENTERED,
    payload: flag
  });
};

export const clearData = () => async dispatch => {
  dispatch({
    type: CLEAR_DATA
  });
};

export const setGoOut = (flag) => async dispatch => {
  dispatch({
    type: SET_GO_OUT,
    payload: flag
  });
};
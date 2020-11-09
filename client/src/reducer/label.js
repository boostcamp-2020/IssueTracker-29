import { sendDeleteRequest, sendGetRequest, sendPostRequest, sendPutRequest } from "../components/common/api";

const SET_LABEL = "LABEL/SET_LABEL";
export const FETCH_LABEL = "LABEL/FETCH_LABEL";
export const DELETE_LABEL = "LABEL/DELETE_LABEL";
export const POST_LABEL = "LABEL/POST_LABEL";
export const EDIT_LABEL = "LABEL/EDIT_LABEL";
export const SET_ISEDIT = "LABEL/SET_ISEDIT";

const asyncWrapper = async (state, action) => {
  switch (action.type) {
    case FETCH_LABEL: {
      const res = await sendGetRequest('/label');
      if (res && res.success) {
        reducer( {type: SET_LABEL, state: {...state, labels: res.result.map(item => ({...item, isEditting: false}))}} );
      }
      break;
    }
    case DELETE_LABEL: {
      const res = await sendDeleteRequest(`/label/${action.id}`);
      if (res && res.success) {
        reducer({type: SET_LABEL, state: {...state, labels: state.labels.filter(item => item.id !== action.id) } });
      }
      break;
    }
    case POST_LABEL: {
      const {name, description, color} = action;
      const res = await sendPostRequest('/label', {name: action.name, description: action.description, color: action.color });
      if (res && res.success) {
        reducer({type: SET_LABEL, state: {...state, labels: [...state.labels, {id: res.result, name, description, color, isEditting: false }]} });
      }
      break;
    }
    case EDIT_LABEL: {
      const {id, name, description, color} = action;
      const res = await sendPutRequest(`/label/${action.id}`, {name: action.name, description: action.description, color: action.color} );
      if (res && res.success) {
        reducer({type: SET_LABEL, state: {...state, labels: state.labels.map(item => (item.id === action.id) ? 
          {id, name, description, color, isEditting: false} : item)} });
      }
      break;
    }
  }
}

export const reducer = (state, action) => {
  switch (action.type) {
    case SET_LABEL: {
      return action.state;
    }
    case FETCH_LABEL:
    case DELETE_LABEL:
    case POST_LABEL:
    case EDIT_LABEL: {
      asyncWrapper(state, action);
      break;
    }
    case TOGGLE_ISEDIT: {
      return {...state, labels: state.labels.map(item => (action.id === item.id) ? {...item, isEditting: !item.isEditting}: item)}
    }
  }
};
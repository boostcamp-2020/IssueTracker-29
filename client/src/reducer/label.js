export const FETCH_LABEL = "LABEL/FETCH_LABEL";
export const DELETE_LABEL = "LABEL/DELETE_LABEL";
export const POST_LABEL = "LABEL/POST_LABEL";
export const EDIT_LABEL = "LABEL/EDIT_LABEL";
export const TOGGLE_ISEDIT = "LABEL/SET_ISEDIT";

export const reducer = (state, action) => {
  switch (action.type) {
    case FETCH_LABEL:
      return {...state, labels: action.payload.labels};
    case DELETE_LABEL:
      return {...state, labels: state.labels.filter(item => item.id !== action.payload.id)};
    case POST_LABEL:
      return {...state, labels: [...state.labels, action.payload.newLabel]};
    case EDIT_LABEL: {
      return {...state, labels: state.labels.map(item => item.id === action.payload.newLabel.id ? action.payload.newLabel : item)};
    }
    case TOGGLE_ISEDIT: {
      return {...state, labels: state.labels.map(item => (action.payload.id === item.id) ? {...item, isEditting: !item.isEditting}: item)}
    }
  }
};
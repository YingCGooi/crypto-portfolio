const initialState = {
  'BAT': 276,
  'BTC': 0.122,
  'BTCP': 1000,
  'ENG': 38,
  'EOS': 5.47,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_EDIT_ASSET':
      state = Object.assign({}, state, action.payload)
      break;

    case 'DELETE_ASSET':
      state = Object.assign({}, state);
      delete state[action.payload];
      break;
      
    default: return state;
  }
  return state;
}
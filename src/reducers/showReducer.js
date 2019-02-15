const initialState = 'home';

export default (state = initialState, action) => {
  if (action.type === 'SHOW_PANEL') {
    state = action.payload;
  }
  return state;
}
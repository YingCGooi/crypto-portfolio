import { show } from '../actions/showActions';

export const mapShowActionToProps = (dispatch) => (
  {
    show: (modal) => dispatch(show(modal))
  }
)
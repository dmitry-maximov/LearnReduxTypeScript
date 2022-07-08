import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import ActionCreators from '../store/action-creators/'; // все actioncreator которые

// хук для обьединения actioncreators и dispatch
// дабы не таскать каждый раз в компоненте dispatch(actioncreator())
export const useActions = () => {
  const dispatch = useDispatch();
  return bindActionCreators(ActionCreators, dispatch);
};

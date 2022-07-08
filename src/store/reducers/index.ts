import { combineReducers } from 'redux';
import { todoReducer } from './todoReducer';
import { userReducer } from './user.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReducer,
});

// данный тип необходим для корректного возврата типизированных данных (корректной деструкторизации)
// при использовании типизированного useSelector
export type RootState = ReturnType<typeof rootReducer>;

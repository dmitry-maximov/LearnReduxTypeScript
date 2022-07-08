import { combineReducers } from 'redux';
import { userReducer } from './user.reducer';

export const rootReducer = combineReducers({
  user: userReducer,
});

// данный тип необходим для корректного возврата типизированных данных (корректной деструкторизации)
// при использовании типизированного useSelector
export type RootState = ReturnType<typeof rootReducer>;

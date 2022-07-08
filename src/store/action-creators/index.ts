import * as UserActionCreators from './user';
import * as TodoActionCreators from './todo';

// обьединяем все actioncreators(пока один но мало ли масштабирование)
// для вызова в одном хуке useAction чтобы не таскать dispath
export default {
  ...UserActionCreators, // все actioncreators для user
  ...TodoActionCreators, // все actioncreators для todo
};

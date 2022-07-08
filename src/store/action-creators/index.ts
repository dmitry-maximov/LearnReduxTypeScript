import * as UserActionCreators from './user';

// обьединяем все actioncreators(пока один но мало ли масштабирование)
// для вызова в одном хуке useAction чтобы не таскать dispath
export default {
  ...UserActionCreators, // все actioncreators для user
};

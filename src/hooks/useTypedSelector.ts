import { TypedUseSelectorHook } from 'react-redux';
import { useSelector } from 'react-redux';
import { RootState } from '../store/reducers';

//хук для того чтобы корректно получать данные из стора
//тот же useSelector но  корректно возвращает типизированные данные из store
export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;

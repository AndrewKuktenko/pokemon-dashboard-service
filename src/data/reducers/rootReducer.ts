import { combineReducers, Reducer } from 'redux';
import { IReduxAction } from 'ts/interfaces/redux/redux.action';
import user from './user';
import pokemon from './pokemon';
import loading from './loading';

const combinedReducer = combineReducers({
  user,
  pokemon,
  loading,
});

const rootReducer: Reducer = (state: any, action: IReduxAction) => {
  return combinedReducer(state, action);
};

export default rootReducer;
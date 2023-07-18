import jwt_decode from 'jwt-decode';
import { EReduxTypes } from 'ts/enums/redux.types';
import { IReduxAction } from 'ts/interfaces/redux/redux.action';
import { IUserState } from 'ts/interfaces/user/user.state';
import { ITokenPayload } from 'ts/interfaces/user/token.payload';

const accessToken = localStorage.getItem('ACCESS_TOKEN'); 

const initialState: IUserState = {
  tokenPayload: accessToken ? jwt_decode(accessToken) as ITokenPayload : null,
  userData: null,
};

const userReducer = (state = initialState, action: IReduxAction): IUserState | {} => {
  switch (action.type) {
    case EReduxTypes.SIGN_UP: {
      const accessToken = action?.payload?.accessToken;
      localStorage.setItem('ACCESS_TOKEN', accessToken);
      const tokenPayload: any = jwt_decode(accessToken);

      return {
          ...state,
          tokenPayload,
      }
    }
    case EReduxTypes.SIGN_IN: {
        const accessToken = action?.payload?.accessToken;
        const refreshToken = action?.payload?.refreshToken;
        
        localStorage.setItem('ACCESS_TOKEN', accessToken);
        localStorage.setItem('REFRESH_TOKEN', refreshToken);

        const tokenPayload: any = jwt_decode(accessToken);
        
        return {
          ...state,
          tokenPayload,
        }
    }
    case EReduxTypes.SIGN_OUT: {        
        localStorage.removeItem('ACCESS_TOKEN');
        localStorage.removeItem('REFRESH_TOKEN');
        return {}
    }
    default:
      return state;
  }
};

export default userReducer;
import {User} from '../../../domain/entities/user';

export interface AuthState {
  token?: string;
  user?: User;
}

import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private ROLE_ID_KEY: string = 'role_id';
  private NEW_USER_ROLE_ID_KEY: string = 'new_user_role_id';
  private OFFER_ID_KEY: string = 'offer_id';

  constructor() {
  }

  saveRoleId(id: string): void {
    localStorage.setItem(this.ROLE_ID_KEY, id);
  }

  getRoleId(): string {
    return localStorage.getItem(this.ROLE_ID_KEY);
  }

  saveNewUserRoleId(id: string): void {
    localStorage.setItem(this.NEW_USER_ROLE_ID_KEY, id);
  }

  getNewUserRoleId(): string {
    return localStorage.getItem(this.NEW_USER_ROLE_ID_KEY);
  }

  saveOfferId(id: string): void {
    localStorage.setItem(this.OFFER_ID_KEY, id);
  }

  getOfferId(): string {
    return localStorage.getItem(this.OFFER_ID_KEY);
  }
}

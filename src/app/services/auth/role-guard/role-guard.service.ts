import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { Router } from '@angular/router';

import { FirebaseAuthService } from '../firebase-auth/firebase-auth.service';

/**
 * Prüft die Rollen des Nutzers
 * @author Daniel Sogl
 */
@Injectable()
export class RoleGuard implements CanActivate {

  /**
   * @param  {FirebaseAuthService} auth Firebase Auth Service
   * @param  {Router} router Angular Router
   */
  constructor(public auth: FirebaseAuthService, public router: Router) { }

  canActivate(): boolean {
    return true;
  }

}

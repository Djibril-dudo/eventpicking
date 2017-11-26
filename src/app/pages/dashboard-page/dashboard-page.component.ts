import { Event } from '../../classes/event';
import { Component, OnDestroy, OnInit, TemplateRef, ViewChild } from '@angular/core';

import { User } from '../../classes/user';
import { FirebaseAuthService } from '../../services/auth/firebase-auth/firebase-auth.service';

@Component({
  selector: 'app-dashboard-page',
  templateUrl: './dashboard-page.component.html',
  styleUrls: ['./dashboard-page.component.scss']
})
export class DashboardPageComponent implements OnInit, OnDestroy {

    public user: User;
    public events: Event[] = [];
    public sales: any[] = [];
    public optionsSelect: Array<any>;

    public template: TemplateRef<any>;

    @ViewChild('loadingTmpl') loadingTmpl: TemplateRef<any>;
    @ViewChild('userTmpl') userTmpl: TemplateRef<any>;
    @ViewChild('photographerTmpl') photographerTmpl: TemplateRef<any>;
    @ViewChild('adminTmpl') adminTmpl: TemplateRef<any>;

    constructor(private auth: FirebaseAuthService) { }

    ngOnInit() {
      this.optionsSelect = [
        { value: 'male', label: 'Frau' },
        { value: 'female', label: 'Herr' },
    ];
      this.template = this.loadingTmpl;
      this.auth.user.subscribe((user: any) => {
        if (user) {
          this.user = user;
          console.log(this.user);
          if (this.user.roles.admin) {
            this.template = this.adminTmpl;
          } else if (this.user.roles.user) {
            this.template = this.userTmpl;
          } else {
            this.template = this.photographerTmpl;
          }
        }
      });
    }

    ngOnDestroy() {
    }

  }

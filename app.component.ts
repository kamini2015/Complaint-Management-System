import { Component } from '@angular/core';
import { SessionService } from './session.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bch';

  constructor(public session:SessionService)
  {
    console.log(this.session.bch_user.bch_login);
  }
}

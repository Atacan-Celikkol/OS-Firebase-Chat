import { Component } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'OS-Firebase-Chat';

  constructor(db: AngularFireDatabase) {
    db.list('messages').valueChanges().subscribe(x => console.log(x));
  }
}

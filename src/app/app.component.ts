import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { MessageRequest, MessageResponse } from './core/models/message';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  messages: AngularFireList<MessageResponse>;

  constructor(db: AngularFireDatabase) {
    const messages = db.list('messages');
    messages.valueChanges().subscribe((x: MessageResponse[]) => x);

    console.log(messages);

    const message: MessageRequest = {message: 'qweq', userId: 'qweqa'};

    console.log(db.list('messages').valueChanges());

  }
}

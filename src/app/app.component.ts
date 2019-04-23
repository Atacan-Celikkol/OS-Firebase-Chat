import { Component } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { MessageRequest, MessageResponse } from './core/models/message';

declare var M;

document.addEventListener('DOMContentLoaded', function () {
  M.Tooltip.init(document.querySelectorAll('.tooltipped'));
});

document.addEventListener('DOMContentLoaded', function() {
  M.Modal.init(document.querySelectorAll('.modal'));
});


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {

  dbMessages: AngularFireList<MessageResponse>;
  messages: MessageResponse[];
  userId = '';
  message = '';

  constructor(protected db: AngularFireDatabase) {
    this.dbMessages = db.list('messages');
    this.dbMessages.valueChanges().subscribe((x: MessageResponse[]) => {
      console.log(x);
      this.messages = x;
    });
  }


  send() {
    const message: MessageRequest = { message: this.message, userId: this.userId };
    this.dbMessages.push(message);
    this.message = '';
  }

  clearHistory() {
    this.db.object('messages').set('');
  }

}

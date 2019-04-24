import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from 'angularfire2/database';
import { MessageRequest, MessageResponse } from '../../core/models/message';

declare var M;

document.addEventListener('DOMContentLoaded', function () {
  M.Tooltip.init(document.querySelectorAll('.tooltipped'));
});

document.addEventListener('DOMContentLoaded', function () {
  M.Modal.init(document.querySelectorAll('.modal'));
});


@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.less']
})
export class ChatHeaderComponent implements OnInit {

  dbMessages: AngularFireList<MessageResponse>;
  messages: MessageResponse[];
  userId = '';
  message = '';
  constructor(protected db: AngularFireDatabase) { }

  ngOnInit() {
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

import { Component } from '@angular/core';
import { MessageRequest } from '../../core/models/message';
import { ChatService } from '../../core/services/chat.service';
import { ShareService } from '../../core/services/share.service';

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
export class ChatHeaderComponent {

  userId;
  constructor(protected cs: ChatService, protected ss: ShareService) {
    ss.userId.subscribe(x => this.userId = x);
  }

  send() {
    const message: MessageRequest = { message: 'Test message', userId: 'Test User' };
    this.cs.pushItem(message);
  }

  clearHistory() {
    this.cs.setItem(null);
  }

}

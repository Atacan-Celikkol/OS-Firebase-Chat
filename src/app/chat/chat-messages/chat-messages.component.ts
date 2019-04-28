import { Component } from '@angular/core';
import { MessageResponse } from '../../core/models/message';
import { ChatService } from '../../core/services/chat.service';
import { ShareService } from '../../core/services/share.service';

@Component({
  selector: 'app-chat-messages',
  templateUrl: './chat-messages.component.html',
  styleUrls: ['./chat-messages.component.less']
})
export class ChatMessagesComponent {

  messages: MessageResponse[];
  userId;
  container = document.getElementById('messages-container') as HTMLDivElement;

  constructor(protected cs: ChatService, protected ss: ShareService) {
    ss.userId.subscribe(x => this.userId = x);

    cs.getItems().subscribe(x => {
      this.messages = x;
      this.scrollToBottom();
    });
  }

  scrollToBottom() {
    const coolDown = setTimeout(() => {
      this.container.scrollTo(0, this.container.scrollHeight + 8000);
    }, 100);
  }
}

import { Component, OnInit } from '@angular/core';
import { MessageRequest } from '../../core/models/message';
import { ChatService } from '../../core/services/chat.service';
import { ShareService } from '../../core/services/share.service';

@Component({
  selector: 'app-chat-footer',
  templateUrl: './chat-footer.component.html',
  styleUrls: ['./chat-footer.component.less']
})
export class ChatFooterComponent implements OnInit {

  userId;
  message = '';
  container = document.getElementById('messages-container') as HTMLDivElement;

  constructor(protected cs: ChatService, protected ss: ShareService) {
    ss.userId.subscribe(x => this.userId = x);
  }

  ngOnInit() {
  }

  send() {
    const message: MessageRequest = { message: this.message, userId: this.userId };
    this.cs.pushItem(message);
    this.message = '';
  }

  scrollToBottom() {
    const coolDown = setTimeout(() => {
      this.container.scrollTo(0, this.container.scrollHeight + 8000);
    }, 250);
  }

}

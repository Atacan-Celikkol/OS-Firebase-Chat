import { Component, AfterViewInit } from '@angular/core';
import { MessageRequest } from '../../core/models/message';
import { ChatService } from '../../core/services/chat.service';
import { ShareService } from '../../core/services/share.service';
import { isNullOrUndefined } from 'util';

declare var M;


@Component({
  selector: 'app-chat-header',
  templateUrl: './chat-header.component.html',
  styleUrls: ['./chat-header.component.less']
})
export class ChatHeaderComponent implements AfterViewInit {

  userId;
  constructor(protected cs: ChatService, protected ss: ShareService) {
    ss.userId.subscribe(x => this.userId = x);
  }
  ngAfterViewInit(): void {
    M.Tooltip.init(document.querySelectorAll('.tooltipped'));
    const instances = M.Modal.init(document.querySelectorAll('.modal'));
    if (isNullOrUndefined(this.userId)) {
      instances[0].open();
    }
  }

  send() {
    const message: MessageRequest = { message: 'Test message', userId: 'Test User' };
    this.cs.pushItem(message);
  }

  clearHistory() {
    this.cs.setItem(null);
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatMessagesComponent } from './chat-messages/chat-messages.component';
import { ChatFooterComponent } from './chat-footer/chat-footer.component';
import { ChatHeaderComponent } from './chat-header/chat-header.component';
import { ChatComponent } from './chat.component';

@NgModule({
  declarations: [
    ChatMessagesComponent,
    ChatFooterComponent,
    ChatHeaderComponent,
    ChatComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ChatComponent
  ]
})
export class ChatModule { }

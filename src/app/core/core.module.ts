import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChatService } from './services/chat.service';
import { AngularFireModule } from 'angularfire2';
import { environment } from '../../environments/environment.prod';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    ChatService
  ]
})
export class CoreModule { }

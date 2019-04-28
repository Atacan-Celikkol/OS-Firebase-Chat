import { Injectable } from '@angular/core';
import { DataService } from './data.service';
import { MessageResponse, MessageRequest } from '../models/message';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class ChatService extends DataService<MessageRequest, MessageResponse> {

  constructor(protected db: AngularFireDatabase) {
    super(db, 'messages');
  }
}

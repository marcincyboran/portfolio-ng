import { Component, OnInit } from '@angular/core';
import { HttpContactService } from '../../_services/http-contact.service';
import { Message } from '../../interfaces/message';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {
  messages: Array<Message>;
  isLoading = true;
  loadingError = false;
  filter = 'all';

  constructor(private http: HttpContactService) {}

  ngOnInit() {
    this.http.getMessages().subscribe(
      data => {
        console.log('Messages ngOninit get messages subscribe', data);
        this.messages = data;
      },
      (error: HttpErrorResponse) => {
        console.log('Wild error appears', error);
        this.loadingError = true;
        this.isLoading = false;
      },
      () => {
        console.log('completed');
        this.isLoading = false;
      }
    );
  }

  show(filter: string): void {
    this.filter = filter;
    console.log(filter);
  }

  deleteMessage(message: Message) {
    if (confirm('Na pewno?')) {
      this.http.deleteMessage(message);
      this.messages = this.messages.filter(mess => mess._id.$oid !== message._id.$oid);
    }
  }

  readMessage(message: Message) {
    message.isNew = false;
    this.http.updateMessage(message);
    this.messages = this.messages.map((mess, i) => {
      if (mess._id.$oid === message._id.$oid) {
        mess.isNew = false;
      }
      return mess;
    });
  }

}

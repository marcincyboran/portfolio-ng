import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Message } from '../interfaces/message';

@Injectable({
  providedIn: 'root'
})
export class HttpContactService {

  readonly URL_DB = 'https://api.mlab.com/api/1/databases/portfolio_blog/collections/messages';
  readonly param = new HttpParams().set(
    'apiKey',
    'nZ4X3O7K8gYk47-neLjlvUwF4W56ReLg'
  );

  constructor(private http: HttpClient) {
    console.log('Http-contact service constructor');
  }

  getMessages(): Observable<Array<Message>> {
    return this.http.get<Array<Message>>(this.URL_DB, { params: this.param });
  }

  sendMessage(message: Message): void {
    this.http.post<Message>(this.URL_DB, message, { params: this.param }).subscribe(data => {
      console.log('Message sent: ', data);
    });
  }

  updateMessage(message: Message): void {
    const id = message._id.$oid;
    this.http.put<Message>(this.URL_DB + '/' + id, message, { params: this.param }).subscribe(data => {
      console.log('Message update: ', data);
    });
  }

  deleteMessage(message: Message): void {
    const id = message._id.$oid;
    this.http.delete(this.URL_DB + '/' + id, { params: this.param }).subscribe(data => {
      console.log('Message deleted: ', data);
    });
  }
}

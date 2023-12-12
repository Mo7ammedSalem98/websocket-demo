import { Component, OnInit } from '@angular/core';
import { ChatService } from '../../services/chat.service';
import { ChatMessage } from '../../models/chat-message';
import {ChatApiService} from "../../services/chat-api.service";

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrl: './chat.component.css'
})
export class ChatComponent implements OnInit{

  title = 'He';
  constructor(private chatService: ChatService,private chatApiService:ChatApiService)
  {

  }
  clickButton(){
    // console.log('Hello World from chat');
    this.chatApiService.deleteTag(1, 2, 3);
  }
  ngOnInit(): void {
    // this.chatService.joinRoom("ABC");
    this.chatService.connect(() => {

      this.chatService.subAddMsg(msg => {
        this.title = msg;
      });

      this.chatService.subAddTag(msg => {
        this.title = msg;
      });

      this.chatService.subEditTag(msg => {
        this.title = msg;
      });

      this.chatService.subDeleteTag(msg => {
        this.title = msg;
      });

      this.chatService.subLoginUser(msg => {
        this.title = msg;
      });

      this.chatService.subLogoutUser(msg => {
        this.title = msg;
      });

    });
  }

  // sendMessage(){
    // const chatMessage = {
    //   message: 'Hello World',
    //   user: '1'
    // }as ChatMessage
    //
    // this.chatService.sendMessage("ABC", chatMessage);

//
//     this.chatService.sendOsama();
//   }
} //
//https://5988-51-39-65-71.ngrok-free.app
// خلاص وقفهم انت ماراح المس شي
// لا ماطلع شي

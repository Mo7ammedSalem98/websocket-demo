import { Injectable } from '@angular/core';
import {AxiosService} from "../axios.service";

@Injectable({
  providedIn: 'root'
})
export class ChatApiService {

  constructor(private axiosService:AxiosService) { }

  addMsg(projectId:number){
    this.axiosService.request(
      "POST",
      `api/v1/chat/project/${projectId}/msg`,
      undefined
    )
  }

  addTag(msg_id:number, projectId:number){
    this.axiosService.request(
      "POST",
      `api/v1/chat/project/${projectId}/msg/${msg_id}/tag`,
      undefined
    )
  }

  editTag(projectId:number, tag_id:number, msg_id:number){
    this.axiosService.request(
      "PUT",
      `api/v1/chat/project/${projectId}/msg/${msg_id}/tag/${tag_id}`,
      undefined
    )
  }

  deleteTag(projectId:number, tag_id:number, msg_id:number){
    this.axiosService.request(
      "DELETE",
      `api/v1/chat/project/${projectId}/msg/${msg_id}/tag/${tag_id}`,
      undefined
    )
  }

  loginUser(projectId:number,name:string){
    this.axiosService.request(
      "POST",
      `api/v1/chat/project/${projectId}/msg/login-user`,
      name
    )
  }

  logoutUser(projectId:number,name:string){
    this.axiosService.request(
      "POST",
      `api/v1/chat/project/${projectId}/msg/logout-user`,
      name
    )
  }
}

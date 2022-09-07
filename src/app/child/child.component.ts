import { Component,Input,Output,EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { DataService } from '../data.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit ,OnDestroy  {
// @Input() Message: String; 
// @Input() Message2:String;
// // message="hello Athino  "
// message:String="Hello Athino Croos"
// @Output() messageEvent=new EventEmitter<String>();
  //constructor(private data:DataService) { }
//   sendMessage(){
//     this.messageEvent.emit(this.message)
//   }
  message:string;
  subscription:Subscription;
  constructor(private data:DataService) { }
  ngOnInit(){
    this.subscription =this.data.currentMessage.subscribe(message =>this.message=message)
  }
  ngOnDestroy(){
    this.subscription.unsubscribe();
  }

newMessage(){
  this.data.changeMessage("Hello from child")
}
}
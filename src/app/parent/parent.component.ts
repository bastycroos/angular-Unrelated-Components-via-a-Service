import { Component,ViewChild,AfterViewInit,OnInit, OnDestroy, } from '@angular/core';
import { Subscription } from 'rxjs';
import { ChildComponent } from '../child/child.component';
import { DataService } from '../data.service';



@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent  /*implements AfterViewInit*/ implements OnInit,OnDestroy{
 // parentMessage="message from parent"
   //message ="hello basty"
  // message2="Well come to Unicom"
  // @ViewChild(ChildComponent)child;
  // message:String;
  // ngAfterViewInit(){
  //   this.message=this.child.message
  // }

        // message:String;
        // receiveMessage($event){
        //   this.message=$event;
        // }
        message:String;
        subscription:Subscription;
        constructor(private data:DataService){}
      ngOnInit(){
        this.subscription=this.data.currentMessage.subscribe(message => this.message=message)
      }
      ngOnDestroy(){
        this.subscription.unsubscribe();
      }
       
  

}
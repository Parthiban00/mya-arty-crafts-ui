import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent {
  @Input('inputData') inputData: any;
  @Output() emitData = new EventEmitter<any>();

  constructor(private router:Router){  }


  ngOnInit(){ }

  submit(){
    if(this.inputData){
      this.emitData.emit({status:'registered', next:'sign-in'});

    } else {
      //need to register the user
      this.router.navigate(['/auth/sign-in']);
    }
  }

  goToSignIn(){
    if(this.inputData){
      this.emitData.emit({status:'registered', next:'sign-in'});

    } else {
      this.router.navigate(['/auth/sign-in']);
    }
  }

}

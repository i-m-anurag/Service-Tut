import { Component, OnInit } from '@angular/core';
import { MathOperationService } from 'src/service/math-operation.service';

@Component({
  selector: 'app-home2',
  templateUrl: './home2.component.html',
  styleUrls: ['./home2.component.scss']
})
export class Home2Component implements OnInit {

  constructor(public Math: MathOperationService) { }

  ngOnInit() {
    console.log(this.Math.AddOperation(2, 5, '+'))
  }

}

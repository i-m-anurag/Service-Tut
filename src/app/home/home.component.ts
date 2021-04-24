import { Component, OnInit } from '@angular/core';
import { MathOperationService } from 'src/service/math-operation.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public MathOperation: MathOperationService) { }

  ngOnInit() {
    var a = this.MathOperation.TestFunction();
    console.log(a);

    console.log(this.MathOperation.AddOperation(70, 20, '*'));
  }

}

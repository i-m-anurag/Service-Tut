import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MathOperationService {

  constructor(public http: HttpClient) { }

  //GET FUNCTION CALL
  TestFunction() {
    console.log('SERVICE FUNCTION CALL');
    return 'X'
  }

  //ADDTION OPERATION
  AddOperation(a: number, b: number, operation: string) {
    if (operation === '+') {
      return a + b;
    }
    if (operation === '-') {
      return a - b;
    }
    if (operation === '*') {
      return a * b;
    }
    if (operation === '/') {
      return a / b;
    }

  }


  //API FUNCTION
  ApiCallForAll(url: string, data: any, reqtype: string) {
    if (reqtype === 'POST') {
      return this.http.post(url, data);
    }
    if (reqtype === 'GET') {
      return this.http.get(url);
    }
    if (reqtype === 'DELETE') {
      return this.http.delete(url, data);
    }
    if (reqtype === 'PUT') {
      return this.http.put(url, data);
    }
    if (reqtype === 'PATCH') {
      return this.http.patch(url, data);
    }
  }

}

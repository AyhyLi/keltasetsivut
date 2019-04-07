import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SovellusService {

  constructor(private http : HttpClient) { }

   url : string = "http://localhost:3008/haku";

   hakutulos : string[];

 lahetaKysely = (uusiKysely) : void => {
  
    this.http.put(this.url, uusiKysely).subscribe((data : any) => {

      console.log(uusiKysely);
      
      this.hakutulos = data;
      
    });

  }

}




//Lähde: https://hammerjs.github.io/getting-started/
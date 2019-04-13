import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SovellusService {

  constructor(private http : HttpClient) { }

   //url : string = "http://localhost:3008/haku";
    url : string = "//192.168.0.107:3008/haku"; //koulu 192.168.1.106:3008

   hakutulos : string[];
   valittuKohde : string[];
   tyhja2 : boolean = true;
  

 lahetaKysely = (uusiKysely) : void => {
  
    this.http.put(this.url, uusiKysely).subscribe((data : any) => {

      console.log(uusiKysely);
      
      this.hakutulos = data;
     
      
    });

  }

}


//Lähde: https://hammerjs.github.io/getting-started/
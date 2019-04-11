import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SovellusService {

  constructor(private http : HttpClient) { }

   //url : string = "http://localhost:3008/haku";
   url : string = "//192.168.1.4:3008/haku";

   hakutulos : string[];
   valittuKohde : string[];
   tyhja2 : boolean = true;
   virhe : string = "";

 lahetaKysely = (uusiKysely) : void => {
  //this.virhe = "HEllo";
    this.http.put(this.url, uusiKysely).subscribe((data : any) => {

     // this.virhe += "222 heee 22";

      console.log(uusiKysely);
      
      this.hakutulos = data;
      //this.valittuKohde = data;
      
    });

  }

}


//Lähde: https://hammerjs.github.io/getting-started/
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { Kuvatieto } from './kuvatieto';
import { Kysely } from './Kysely'

@Injectable({
  providedIn: 'root'
})
export class SovellusService {

  constructor(private http : HttpClient, private kamera : Camera) { }

   //url : string = "http://localhost:3008/haku";
    //url : string = "//192.168.0.107:3008/haku";
    //urlKuva : string = "//192.168.0.107:3008/kuva";
    url : string = "//192.168.1.7:3008/haku";
    urlKuva : string = "//192.168.1.7:3008/kuva";

   hakutulos = [];
   valittuKohde = [];
   tyhja2 : boolean = true;
   uusi_kuvatiedot : Kuvatieto;
   kuvattavan_id : number;
   kuvattavan_nimi : string;
   virhe : string = "Alku";
   edellinenKysely : Kysely;
  

 lahetaKysely = (uusiKysely) : void => {
  
    this.http.put(this.url, uusiKysely).subscribe((data : any) => {
      this.edellinenKysely = uusiKysely;
      
      this.hakutulos = data;
      
    });
  }

  lahetaKuva = (uusiKysely) : void => {
  
    this.http.put(this.urlKuva, uusiKysely).subscribe((data : any) => {
 
      this.hakutulos = data;
    
    });
  }

  otaKuva = (tietokantaId : number, yrityksenNimi : string) : void => {

    let asetukset : CameraOptions = {
                                      quality : 70,
                                      destinationType : 0,
                                      targetWidth : 520, //320,
                                      targetHeight : 420, //220,
                                      correctOrientation : true,
                                      saveToPhotoAlbum : false //true
    } 

    this.kamera.getPicture(asetukset).then((kuvadata) => {

      this.virhe = "Kuvaus alkaa";

      //this.kuvanNimi = pvm_unix + "PIC";
      
        this.uusi_kuvatiedot = {
          lohkokoko : "kuva", //  "pieni", //!!!!!EDIT lohoko koko vaihdettu stringiksi ja annettu oletus arvoksi pieni!!!!!
          kohde_id : Number(tietokantaId),
          nimi : yrityksenNimi,
          kuva : `data:image/jpeg;base64,${kuvadata}`
        }
       
        this.lahetaKuva(this.uusi_kuvatiedot);
    

    }).catch((err) => {

      this.virhe =  err;//"Kuvaus virhe";

    });

  }

  
  haeKuva = (tietokantaId : number, yrityksenNimi : string, lohkokoko : string) : void => {

    this.virhe = "Kuvan haku alkaa";

    let asetukset : CameraOptions = {
                                      quality : 70,
                                      destinationType : 0,
                                      sourceType : 0,
                                      targetWidth : 520,
                                      targetHeight : 420,
                                      mediaType : 0,
                                      correctOrientation : true,
                                      saveToPhotoAlbum : false //true
                                    }

    this.kamera.getPicture(asetukset).then((kuvadata) => {

      this.uusi_kuvatiedot = {
        lohkokoko : lohkokoko,
        kohde_id : Number(tietokantaId),
        nimi : yrityksenNimi,
        kuva : `data:image/jpeg;base64,${kuvadata}`
      }

      this.lahetaKuva(this.uusi_kuvatiedot);
      this.virhe = this.uusi_kuvatiedot.nimi;


    }).catch((err) => {

      this.virhe = err; //"Kuvan haku virhe";

    });

  }

}


//Lähde: https://hammerjs.github.io/getting-started/
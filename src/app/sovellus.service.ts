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
    url : string = "//192.168.0.107:3008/haku";
    urlKuva : string = "//192.168.0.107:3008/kuva";

   hakutulos : string[];
   valittuKohde : string[];
   tyhja2 : boolean = true;
   uusi_kuvatiedot : Kuvatieto;
   kuvattavan_id : number;
   kuvattavan_nimi : string;
   virhe : string = "Alku";
   edellinenKysely : Kysely;
  

 lahetaKysely = (uusiKysely) : void => {
  
    this.http.put(this.url, uusiKysely).subscribe((data : any) => {
      this.edellinenKysely = uusiKysely;
      console.log(uusiKysely);
      
      this.hakutulos = data;
     
      
    });

  }

  lahetaKuva = (uusiKysely) : void => {
  
    this.http.put(this.urlKuva, uusiKysely).subscribe((data : any) => {

      console.log(uusiKysely);
      
      this.hakutulos = data;
      
     
    });

  }


  otaKuva = (tietokantaId : number, yrityksenNimi : string) : void => {

   // let paivays = new Date();
   // let pvm_unix = paivays.getTime();

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
          lohkokoko : "pieni", //!!!!!EDIT lohoko koko vaihdettu stringiksi ja annettu oletus arvoksi pieni!!!!!
          kohde_id : Number(tietokantaId),
          nimi : yrityksenNimi, // this.valittuKohde.Yrityksen_nimi, //"taustakuva", //this.valittuKohde.Yrityksen_nimi + " ", //"taustakuva",
          kuva : `data:image/jpeg;base64,${kuvadata}`
        }
        //this.virhe = this.uusi_kuvatiedot + " ";

        

        this.lahetaKuva(this.uusi_kuvatiedot);
    

    }).catch((err) => {

      this.virhe =  err;//"Kuvaus virhe";

      //this.kuvavirhe[this.kuvanumero] = "Kuvaus keskeytetttiin tai se ei onnistunut."

    });

  }


  
  haeKuva = (tietokantaId : number, yrityksenNimi : string, lohkokoko : string) : void => {

    //let paivays = new Date();
    //let pvm_unix = paivays.getTime();

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

     // this.kuvanNimi = pvm_unix + "PIC";
      
      //this.uusi_kuvatiedot[11] = {
      this.uusi_kuvatiedot = {
        lohkokoko : lohkokoko,
        kohde_id : Number(tietokantaId),
        nimi : yrityksenNimi, //"taustakuviX", //this.valittuKohde.Yrityksen_nimi,  //"taustakuviX",
        kuva : `data:image/jpeg;base64,${kuvadata}`
      }

      this.lahetaKuva(this.uusi_kuvatiedot);
      this.virhe = this.uusi_kuvatiedot.nimi;


    }).catch((err) => {

      this.virhe = err;//"Kuvan haku virhe";

      //this.kuvavirhe[this.kuvanumero] = "Kuvaus keskeytetttiin tai se ei onnistunut."

    });

  }



}


//Lähde: https://hammerjs.github.io/getting-started/
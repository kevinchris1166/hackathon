import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  public Name:string;
  public Age:number;
  public Jenis:number;
  public Darah:number;
  public Gula:boolean;
  public Thalasemia:number;
  public Exang:boolean;
  public Jantung:number;
  public message:string;
  constructor(
    private http: HttpClient,
    private alertController: AlertController
  ) {}

  onSubmit(){
    this.http.get('http://localhost:9000/?'+'umur='+this.Age+'&jk='+this.Jenis+'&td='+this.Darah+'&gd='+this.Gula+'&thalac='+this.Jantung+'&exang='+this.Exang+'&thl='+this.Thalasemia).subscribe((response) => {
    if(response[0] === 0){
      this.message = "Hi "+this.Name+"! Anda tidak terindikasi memiliki penyakit jantung :).";
    }
    else if(response[0] === 1){
      this.message = "Hi "+this.Name+"! Anda terindikasi memiliki penyakit jantung dengan persentasi 20%. Silahkan konsultasi ke dokter untuk penanganan lebih lanjut";
    }
    else if(response[0] === 2){
      this.message = "Hi "+this.Name+"! Anda terindikasi memiliki penyakit jantung dengan persentasi 40%. Silahkan konsultasi ke dokter untuk penanganan lebih lanjut";
    }
    else if(response[0] === 3){
      this.message = "Hi "+this.Name+"! Anda terindikasi memiliki penyakit jantung dengan persentasi 60%. Silahkan konsultasi ke dokter untuk penanganan lebih lanjut";
    }
    else if(response[0] === 4){
      this.message = "Hi "+this.Name+"! Anda terindikasi memiliki penyakit jantung dengan persentasi 80%. Harap segera konsultasikan diri anda ke dokter untuk penanganan lebih lanjut";
    }
    this.showModal(this.message);
  });
  }

  async showModal(m:string){
    const alert = await this.alertController.create({
      header: '',
      message: m,
      buttons: [
        {
          text: 'Ok !',
          role: 'cancel',
          cssClass: 'secondary',
          handler: (blah) => {
            console.log('test cancel');
          }
        }
      ]
    });

    await alert.present();
  }

}

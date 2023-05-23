import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload-cv',
  templateUrl: './upload-cv.component.html',
  styleUrls: ['./upload-cv.component.css']
})
export class UploadCvComponent implements OnInit {
  public myForm = new FormGroup({
    file: new FormControl('', [Validators.required])
  });
  file: File | null = null;
  constructor(private httpClient: HttpClient) { }

  ngOnInit(): void {
  }

  onChange(event: any) {
    this.file = event.target.files[0];
}

  onButtonSave(){
    let testData:FormData = new FormData();
    testData.append('file', this.file ?? '', 'newFile.pdf');
    this.httpClient.post('https://dc09-62-128-6-5.ngrok-free.app/uploadfile/', testData)
      .subscribe(res => {
        console.log(res);
      },
      (error)=>{
        console.log(error)
      })
  }

  onButtonCancel(){
    const x = `PERSONAL BACKGROUND
With my energetic and motivated personality, I
would like to get into IT as a front-end
developer. Not only am I looking for positive
stress, but I look forward to any challenge where
I can learn new things.Fritz-Henßler-Berufskolleg
Dortmund
Qualification for Destiller 2021
Immanuel-Kant-
Gymnasium Leipzig
Abitur 2015
Europe Coding Bootcamps
Bootcamp for Junior Front End
Developer 2023
VSCode
GitHub
Vue
Cypress
NPM
REST API
 TECH STACK
HTML
CSS
JavaScript
Vue.js
LANGUAGESTOOLING
KONTAKTDETAILS
  (+49) 176 - 3929 8086
anja.wurlitzer.coding@gmail.com
 Moritzstr. 10
 04600 AltenburgINTERESTS
fitness, journaling, musicin education until June 2021 Destiller
Friedrich Specht Söhne - Meerane |
January 2020 - March 2022
Altenburger Destillerie |
Sept. 2018 - Dec. 2019
Making and developing of liquids and
 spirits, operating the bottling plants,
sensory testingfitness trainer, teens club, customer
service, show entertainment Hotel Animation
PinkWave / Atlantica Mikri Poli Crete |
May 2022 - Oct. 2022ANJA WURLITZER
born 07/11/1995 in Leipzig
English - B1German - mother tongueEDUCATION
LAST EXPERIENCES
SOFT SKILLS
product development in spirit industry in young age
close cooperation as hotel entertainer with team
members as well as hotel stuff and guests.
quick familiarization and absorbing the knowledge in the
bootcampproblem solving - ingenuity - resilience
 communication - empathy - teamwork
 rapid understanding - adaptation - IT-affinityPROJEKTS
Quizapp (final project)
Github: AnjaWurli`

    this.httpClient.get('https://dc09-62-128-6-5.ngrok-free.app/cv/details/',{
      params:{
        content: x,
        question: "How long are they working?"
      },
      headers: new HttpHeaders({
        'ngrok-skip-browser-warning': 'true'

      }),
    } ).subscribe(
      (result)=>{
    console.log(result);
    },
    (error)=>{
      console.log(error);
    })
  }

}

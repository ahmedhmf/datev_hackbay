import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-upload-cv',
  templateUrl: './upload-cv.component.html',
  styleUrls: ['./upload-cv.component.css'],
})
export class UploadCvComponent implements OnInit {
  public myForm = new FormGroup({
    file: new FormControl('', [Validators.required]),
  });
  file: File | null = null;
  constructor(private httpClient: HttpClient) {}

  ngOnInit(): void {}

  onChange(event: any) {
    this.file = event.target.files[0];
  }

  onButtonSave() {
    let testData: FormData = new FormData();
    testData.append('file', this.file ?? '', 'newFile.pdf');
    this.httpClient
      .post('https://f3bb-62-128-6-5.ngrok-free.app/uploadfile/', testData, {
        headers: new HttpHeaders({
          'ngrok-skip-browser-warning': 'true',
        }),
      })
      .subscribe(
        (res) => {
          console.log(res);

          this.httpClient
            .get('https://f3bb-62-128-6-5.ngrok-free.app/cv/details/', {
              params: {
                content: res['page-content'],
                question: 'How long are they working?',
              },
              headers: new HttpHeaders({
                'ngrok-skip-browser-warning': 'true',
              }),
            })
            .subscribe(
              (result) => {
                console.log(result);
              },
              (error) => {
                console.log(error);
              }
            );
        },
        (error) => {
          console.log(error);
        }
      );
  }
}

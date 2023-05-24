import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute } from '@angular/router';
import * as jobs from '../../assets/opened-position.json';

@Component({
  selector: 'app-job-details',
  templateUrl: './job-details.component.html',
  styleUrls: ['./job-details.component.css'],
})
export class JobDetailsComponent implements OnInit {
  private job: any;
  public address = 'https://a45d-62-128-6-5.ngrok-free.app/';
  private myJobs = jobs;
  private dataSource:any;
  @ViewChild('paginator') paginator1: MatPaginator;

  public myDataSource: any;
  displayedColumns: string[] = ['E-Mail', 'Match Probability'];
  constructor(private route: ActivatedRoute, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.dataSource= this.myJobs.jobs;
    this.route.params.subscribe((params) => {
      this.job = this.dataSource.filter((job) => {
        return job.reference_id === params['id'];
      })[0];
    });

    this.httpClient.get(this.address + 'lookup/', {
      params: {
        job_title: this.job.job_title,
        interested_job_position: this.job.business_unit.name,
      },
      headers: new HttpHeaders({
        'ngrok-skip-browser-warning': 'true',
      }),
    }).subscribe((applicats : any)=>{
      this.myDataSource = new MatTableDataSource(applicats.applicants);
      this.myDataSource.paginator = this.paginator1;
      console.log(applicats)
    });
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  convertToNumber(number){
    return Number(number);
  }
}

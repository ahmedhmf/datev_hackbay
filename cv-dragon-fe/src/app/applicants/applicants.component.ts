import { ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import * as jobs from '../../assets/opened-position.json';
import { ApplicantService } from '../applicant.service';

@Component({
  selector: 'app-applicants',
  templateUrl: './applicants.component.html',
  styleUrls: ['./applicants.component.css'],
})
export class ApplicantsComponent implements OnInit {
  public myjobs = jobs;
  public dataSource: any;
  displayedColumns: string[] = ['position', 'name', 'weight'];
  @ViewChild('paginator') paginator1: MatPaginator;

  constructor(public applicantService: ApplicantService) {
    this.dataSource = new MatTableDataSource(this.myjobs.jobs);
    this.dataSource.paginator = this.paginator1;
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator1;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onCheckBoxChanged(event) {
    console.log(event.checked);
    if(event.checked){
      this.applicantService.selectedJobs.push(this.getJobName(event.source.id));
    } else{
      this.applicantService.selectedJobs.splice(this.getJobName(event.source.id),1);
    }
  }

  private getJobName(jobId: string): any {
    return this.myjobs.jobs.filter((job) => {
      return job.reference_id === jobId;
    })[0].job_title;
  }
}

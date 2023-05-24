import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { ApplicantService } from '../applicant.service';
import * as jobs from '../../assets/opened-position.json';

@Component({
  selector: 'app-recruter',
  templateUrl: './recruter.component.html',
  styleUrls: ['./recruter.component.css']
})
export class RecruterComponent implements OnInit {
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

}

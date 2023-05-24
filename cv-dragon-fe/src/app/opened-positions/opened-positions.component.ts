import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import * as jobs  from '../../assets/opened-position.json';

@Component({
  selector: 'app-opened-positions',
  templateUrl: './opened-positions.component.html',
  styleUrls: ['./opened-positions.component.css']
})
export class OpenedPositionsComponent implements OnInit {
  public myjobs = jobs;
  public dataSource: any;
  displayedColumns: string[] = ['position', 'name', 'weight'];
  constructor() { 
    this.dataSource = new MatTableDataSource(this.myjobs.jobs);
  }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

}
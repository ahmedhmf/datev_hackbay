import { Component, OnInit } from '@angular/core';
import * as jobs  from '../../assets/opened-position.json';

@Component({
  selector: 'app-opened-positions',
  templateUrl: './opened-positions.component.html',
  styleUrls: ['./opened-positions.component.css']
})
export class OpenedPositionsComponent implements OnInit {
  public dataSource = jobs;
  displayedColumns: string[] = ['position', 'name', 'weight'];
  constructor() { 
    console.log(this.dataSource.jobs);
  }

  ngOnInit(): void {
  }

}

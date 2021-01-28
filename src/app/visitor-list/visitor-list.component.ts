import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';


@Component({
  selector: 'app-visitor-list',
  templateUrl: './visitor-list.component.html',
  styleUrls: ['./visitor-list.component.css']
})
export class VisitorListComponent implements OnInit {

  visitors = [];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {

    this.dataService.sendGetVisitorListRequest().subscribe((data: any[])=>{
      console.log(data);
      this.visitors = data;
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { queue } from 'rxjs/internal/scheduler/queue';

@Component({
  selector: 'app-request-queue-number',
  templateUrl: './request-queue-number.component.html',
  styleUrls: ['./request-queue-number.component.css']
})
export class RequestQueueNumberComponent implements OnInit {

  currentDateTime = new Date();
  qID = null;

  constructor() { }

  ngOnInit(): void {
    let oldNo = Number(localStorage.getItem('patient_counter'))
    let newNo = oldNo++

    let queueNo = this.currentDateTime + "/patient/" + String(newNo)

    localStorage.setItem('patient_counter', String(newNo));

    this.qID = queueNo;
  }

}

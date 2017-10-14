import { Component, OnInit } from '@angular/core';

import { NotificationService } from '../app-core/notification/notification.service';

@Component({
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {

  constructor(private notificationService: NotificationService) { }

  ngOnInit() {
  }

}

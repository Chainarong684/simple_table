import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/config/server.service';
import { NewsData } from 'src/app/models/news.model';
import * as dayjs from 'dayjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private serverServices: ServiceService) {}

  newsData: NewsData[] = [];

  ngOnInit(): void {
    this.fetchNewsData();
  }

  fetchNewsData() {
    const data = this.serverServices.getNews().subscribe({
      next: (res) => {
        this.newsData = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onChangeStatus(id: number) {
    console.log(id);
  }
}

import { Component, OnInit } from '@angular/core';
import { ServiceService } from 'src/app/config/server.service';
import { NewsData } from 'src/app/models/news.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(private serverServices: ServiceService) {}

  newsData: NewsData[] = [];
  displayNews?: NewsData;
  isEnable: boolean = true;

  ngOnInit(): void {
    this.fetchNewsData();
  }

  fetchNewsData() {
    this.serverServices.getAllNews().subscribe({
      next: (res) => {
        console.log(res.data);
        this.newsData = res.data;
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onChangeStatus(id: number, status: boolean) {
    const req = {
      EmployeeId: 3,
      NewsId: id,
      Status: status ? 1 : 0,
    };

    this.serverServices.updateStatusByNewsId(req).subscribe({
      next: (res) => {
        console.log(res);
        this.fetchNewsData();
      },
      error: (err) => {
        console.log(err);
      },
    });
  }

  onClickCreate() {
    this.displayNews = undefined;
    this.isEnable = false;
  }

  onClickView(id: number) {
    this.isEnable = true;
    this.displayNews = this.newsData.find((item) => item.NewsId === id);
  }
  onClickEdit(id: number) {
    this.isEnable = false;
    this.displayNews = this.newsData.find((item) => item.NewsId === id);
  }
  onClickDelete(id: number) {
    this.displayNews = this.newsData.find((item) => item.NewsId === id);
  }

  onConfirmDelete() {
    if (this.newsData.length > 1) {
      this.newsData = this.newsData.filter(
        (item) => item.NewsId !== this.displayNews?.NewsId
      );
    } else {
      alert('ไม่สามารถลบทั้งหมดได้');
    }
  }
}

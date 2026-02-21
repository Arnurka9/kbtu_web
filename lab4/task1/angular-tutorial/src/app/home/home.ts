import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Data } from '../services/data';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './home.html',
  styleUrl: './home.css',
})
export class Home {
  message = "Angular is working!";
  posts: any[] = [];
  
  constructor(private dataService: Data) {}

  loadData() {
    this.dataService.getPosts().subscribe(data => {
      this.posts = data;
    })
  }
}

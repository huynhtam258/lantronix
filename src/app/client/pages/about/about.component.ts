import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  standalone: false,
  templateUrl: './about.component.html',
})
export class AboutComponent implements OnInit {
  constructor(
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.title.setTitle('About | My Client Site');
    this.meta.updateTag({ name: 'description', content: 'SEO about page description' });
    this.meta.updateTag({ property: 'og:title', content: 'about | My Client Site' });
  }
}

import { Component, OnInit } from '@angular/core';
import { Title, Meta } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  products = [
    {
      title: "Vodafone MachineLink Ethernet Switch",
      code: "(NWL-04)",
      link: "https://vodafone.netcommwireless.com/product/NWL-04",
      img: "https://vodafone.netcommwireless.com/image/products/3f86a7e830c94d0caaef73ef41b0cff7.png",
      width: 220,
      height: 153
    },
    {
      title: "Vodafone MachineLink 3G",
      code: "(NWL-10)",
      link: "https://vodafone.netcommwireless.com/product/NWL-10",
      img: "https://vodafone.netcommwireless.com/image/products/3a130223f4fc4436b8a835c8ce3fe774.png",
      width: 220,
      height: 153
    },
    {
      title: "Vodafone MachineLink 3G Plus",
      code: "(NWL-12)",
      link: "https://vodafone.netcommwireless.com/product/NWL-12",
      img: "https://vodafone.netcommwireless.com/image/products/b338d0bbc14140b8b44f6346772b77b2.png",
      width: 220,
      height: 153
    },
    {
      title: "Vodafone MachineLink 4G",
      code: "(NWL-22)",
      link: "https://vodafone.netcommwireless.com/product/NWL-22",
      img: "https://vodafone.netcommwireless.com/image/products/ad215a44b7a64a4f82d755b7336f7bf5.png",
      width: 220,
      height: 153
    },
    {
      title: "Vodafone MachineLink 4G Lite",
      code: "(NWL-220)",
      link: "https://vodafone.netcommwireless.com/product/NWL-220",
      img: "https://vodafone.netcommwireless.com/image/products/3bd5a64aaa434294aea9659c7c2f68d2.png",
      width: 220,
      height: 153
    },
    {
      title: "12 V DC Power Supply",
      code: "(PSU-0079)",
      link: "https://vodafone.netcommwireless.com/product/PSU-0079",
      img: "https://vodafone.netcommwireless.com/image/products/d1cda6937327466f9a45fa66fe818904.png",
      width: 220,
      height: 153
    }
  ];
  constructor(
    private title: Title,
    private meta: Meta
  ) {}

  ngOnInit(): void {
    this.title.setTitle('vodafone.netcommwireless.com');
    this.meta.updateTag({ name: 'description', content: 'SEO home page description' });
    this.meta.updateTag({ property: 'og:title', content: 'Home | My Client Site' });
  }
}

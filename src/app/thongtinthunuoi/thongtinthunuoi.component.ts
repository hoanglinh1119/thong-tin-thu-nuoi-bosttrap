import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thongtinthunuoi',
  templateUrl: './thongtinthunuoi.component.html',
  styleUrls: ['./thongtinthunuoi.component.css']
})
export class ThongtinthunuoiComponent implements OnInit {
  petName = 'dog';
  petImage = 'http://yourdost-blog-images.s3-ap-southeast-1.amazonaws.com/wp-content/uploads/2016/01/03165939/Dogs.jpg';
  constructor() { }
  upDateName(name){
    this.petName = name;
  }
  updateImage(image){
    this.petImage = image ;
  }

  ngOnInit(): void {
  }

}

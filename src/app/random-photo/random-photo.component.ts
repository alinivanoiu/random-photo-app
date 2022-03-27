import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo.service';

@Component({
  selector: 'app-random-photo',
  templateUrl: './random-photo.component.html',
  styleUrls: ['./random-photo.component.css'],
})
export class RandomPhotoComponent implements OnInit {
  imageUrl = '';
  constructor(private photoService: PhotoService) {}

  ngOnInit(): void {}
  getRandomPhoto() {
    this.photoService
      .getRandomPhoto()
      .subscribe((imageUrl) => (this.imageUrl = imageUrl));
  }
}

import { Component, OnInit } from '@angular/core';
import { RatingService } from '../../services/rating.service';
import { Rating } from '../../models/rating';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit {
  ratings: Rating[] = [];
  userId = 1; // Assuming this is the ID of the user you want to filter by
  userRatings: Rating[] = [];

  constructor(private ratingService: RatingService) { }

  ngOnInit(): void {
    this.ratingService.getRatings().subscribe(ratings => {
      this.ratings = ratings;
      this.userRatings = this.ratings.filter(rating => rating.id === this.userId);
    });
  }
}

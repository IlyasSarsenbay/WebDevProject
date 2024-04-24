from django.db import models
from django.contrib.auth.models import User
from decimal import Decimal
class Genre(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField(blank=True)

    def __str__(self):
        return self.name

class MovieManager(models.Manager):
    def get_long_movies(self):
        return self.filter(duration__gt=120)
    
class Company(models.Model):
    name = models.CharField(max_length=255)
    description = models.TextField()

    def __str__(self):
        return self.name
    
class Movie(models.Model):
    title = models.CharField(max_length=255)
    description = models.TextField()
    genre = models.ForeignKey(Genre, on_delete=models.CASCADE)
    release_date = models.DateField()
    duration = models.IntegerField()  
    director = models.CharField(max_length=255)
    cast = models.TextField()
    poster_image_url = models.URLField()
    trailer_url = models.URLField()
    average_rating = models.DecimalField(max_digits=3, decimal_places=1, default=0.0)
    total_ratings = models.IntegerField(default=0)
    company = models.ForeignKey(Company, on_delete=models.CASCADE, related_name='movies', null=True, default=None)
    objects = MovieManager()

    def __str__(self):
        return self.title

class Rating(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
    rating_value = models.IntegerField()

    class Meta:
        unique_together = ('user', 'movie') 

    def __str__(self):
        return f"{self.user.username} - {self.movie.title} - {self.rating_value}"
    
    def save(self, *args, **kwargs):
        super(Rating, self).save(*args, **kwargs)

        movie = self.movie
        ratings = Rating.objects.filter(movie=movie)
        total_ratings = ratings.count()

        if total_ratings > 0:
            average_rating = Decimal(sum(r.rating_value for r in ratings)) / total_ratings
        else:
            total_ratings = 0
            average_rating = Decimal(self.rating_value)

        movie.average_rating = average_rating
        movie.total_ratings = total_ratings
        movie.save()



from django.urls import path
from . import views

urlpatterns = [
    # URL patterns for movies
    path('movies/', views.MovieList.as_view(), name='movie-list'),
    path('movies/<int:pk>/', views.MovieDetail.as_view(), name='movie-detail'),

    # URL patterns for genres
    path('genres/', views.genre_list, name='genre-list'),
    path('genres/<int:pk>/', views.genre_detail, name='genre-detail'),

    # URL patterns for ratings
    path('ratings/', views.rating_list, name='rating-list'),
    path('ratings/<int:pk>/', views.rating_detail, name='rating-detail'),

    # URL patterns for companies
    path('companies/', views.CompanyListCreateView.as_view(), name='company-list-create'),
    path('companies/<int:pk>/', views.CompanyRetrieveUpdateDestroyView.as_view(), name='company-retrieve-update-destroy'),

    # URL patterns for authentication
    path('login/', views.login, name='login'),
    path('logout/', views.logout, name='logout'),
]
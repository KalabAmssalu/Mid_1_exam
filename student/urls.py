from django.urls import path

from . import views


urlpatterns = [
    path('stud/', views.StudentList.as_view()),
]

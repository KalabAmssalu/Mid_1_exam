from django.shortcuts import render
from rest_framework import generics
from .serializers import StudentSerializer
from .models import Student

class StudentList(generics.ListCreateAPIView):
	serializer_class = StudentSerializer
	queryset = Student.objects.all()



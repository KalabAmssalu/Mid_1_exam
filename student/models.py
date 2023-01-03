from django.db import models

# Create your models here.

class Student(models.Model):
    id=models.AutoField(primary_key=True)
    StudentName = models.CharField(max_length=30)
    Grade = models.IntegerField(default=0, null=False)

    def __str__(self):
        return self.StudentName
from django.db import models

class Participation(models.Model):
  first_name = models.CharField(max_length=225, default='')
  last_name = models.CharField(max_length=225, default='')
  participation_pct = models.FloatField(default=0.0)

  def __str__(self):
    return f'{self.first_name} {self.last_name}'
from django.db import models
from django.conf import settings

# Create your models here.
class score(models.Model):
    marks        = models.IntegerField()
    participant  = models.ForeignKey(settings.AUTH_USER_MODEL, on_delete=models.CASCADE)

    def __str__(self):
        return f'{self.participant}:{self:marks}'
from rest_framework import serializers

from polls.models import Participation
  
class ParticipationSerializer(serializers.ModelSerializer):
  class Meta:
    model = Participation
    fields = '__all__'
from rest_framework import viewsets, status
from rest_framework.views import APIView
from rest_framework.response import Response

from polls.models import Participation
from polls.serializers import ParticipationSerializer

class ParticipationViewSet(viewsets.ModelViewSet):
  queryset = Participation.objects.all()
  serializer_class = ParticipationSerializer

class ParticipationView(APIView):
  def post(self, request):
    serializer = ParticipationSerializer(data=request.data)
    if serializer.is_valid():
      serializer.save()
      return Response(serializer.data, status=status.HTTP_201_CREATED)
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
  
  def delete(self, pk):
    try:
      participation = Participation.objects.get(pk= pk)
      participation.delete()
      return Response({"message": "Successfully deleted"}, status=status.HTTP_204_NO_CONTENT)
    except participation.DoesNotExist:
      return Response({"error": "Participation not found"}, status=status.HTTP_400_BAD_REQUEST)
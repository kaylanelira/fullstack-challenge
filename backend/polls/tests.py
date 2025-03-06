from django.test import TestCase
from polls.models import Participation

class ParticipationTestCase(TestCase):
  def test_create_participation(self):
    participation = Participation.objects.create(first_name="Enrique", last_name="Laborao", participation_pct=20)
    self.assertEqual(participation.first_name, "Enrique")
    self.assertEqual(participation.last_name, "Laborao")
    self.assertEqual(participation.participation_pct, 20)

  def test_default_values(self):
    participation = Participation.objects.create()
    self.assertEqual(participation.first_name, "")
    self.assertEqual(participation.last_name, "")
    self.assertEqual(participation.participation_pct, 0.0)

  def test_str(self):
    participation = Participation.objects.create(first_name="Enrique", last_name="Laborao", participation_pct=20)
    self.assertEqual(str(participation), "Enrique Laborao: 20%")
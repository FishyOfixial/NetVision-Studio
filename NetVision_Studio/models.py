from django.db import models

# Create your models here.
class Device(models.Model):
    type = models.CharField(max_length=20, null=False, blank=False)
    ip_device = models.GenericIPAddressField(unique=True)
    hostname = models.CharField(max_length=50, blank=True, null=False, default='Device')

class Interface(models.Model):
    device = models.ForeignKey(Device, on_delete=models.CASCADE, related_name='id_device')
    name = models.CharField(max_length=20, null=False, blank=False)
    state = models.BooleanField(default=False)
    is_access = models.BooleanField(default=True)
    native = models.PositiveIntegerField(default=1, null=False)
    allowed_vlan = models.CharField(max_length=200, blank=True, null=True)

class TopologyLink(models.Model):
    device_a = models.ForeignKey(Device, on_delete=models.CASCADE, related_name='link_a')
    interface_a = models.ForeignKey(Interface, on_delete=models.CASCADE, related_name='int_a')
    device_b = models.ForeignKey(Device, on_delete=models.CASCADE, related_name='link_b')
    interface_b = models.ForeignKey(Interface, on_delete=models.CASCADE, related_name='int_b')



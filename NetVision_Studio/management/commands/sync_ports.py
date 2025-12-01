from django.core.management.base import BaseCommand
from ...networking import sync_ports
from ...syslog.discover_links import sync_links
from ...models import Device

class Command(BaseCommand):
    help = "Sincroniza puertos y enlaces (CDP)"

    def handle(self, *args, **kwargs):
        print("\n=== Sync Ports ===")
        devices = Device.objects.all()
        for d in devices:
            sync_ports(d.pk)

        print("\n=== Sync Links ===")
        sync_links()

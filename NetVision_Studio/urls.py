from django.urls import path
from . import views

urlpatterns = [
    path('', views.multilayer_HTML, name = 'multilayer'),
    path('acceso/', views.access_HTML, name='access')
    
]

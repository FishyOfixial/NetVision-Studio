from django.shortcuts import render

def multilayer_HTML(request):
    return render(request, "SWD.html")

def access_HTML(request): 
    return render(request, 'access.html')
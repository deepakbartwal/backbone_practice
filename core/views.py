from django.shortcuts import render, HttpResponse, Http404, redirect
from django.http import HttpResponseRedirect, Http404
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth.decorators import login_required
from django.conf import settings
from pprint import pprint
# from .forms import *
# from .utils import *
# Create your views here.

def Register(request):
    if request.user.is_authenticated:
        return redirect('/')

    if request.method == "GET":
        return render(request, "register.html", None)
    if request.method == "POST":
        return HttpResponse("data received")

def Login(request):
    """view to handle incoming login request"""
    pprint("_____________________________login request_____________________________")
    if request.user.is_authenticated:
        return redirect('/')
    if request.method == 'GET':
        next = request.GET.get('next', '/')
    if request.method == "POST":
        next = request.GET.get('next', '/')
        pprint(request.POST)
        username = request.POST['username']
        password = request.POST['password']
        user = authenticate(username=username, password=password)
        if user is not None:
            login(request, user)
            pprint("_____________________________login Successful_____________________________")
            if next == '':
                return redirect('?status=login')
            return HttpResponseRedirect(next)
        else:
            error = 'Incorrect Email or Password'
            pprint("_____________________________login error_____________________________")
            return render(request, 'login.html',
                          context={'error': error, 'next':next})
    else:
        return render(request, "login.html", {'next': next})

def Logout(request):
    """view to handle the incoming logout requst"""
    logout(request)
    return redirect('/landing/?status=logout')
    LogoutMessage="Logout Successful"
    return HttpResponse(LogoutMessage)
    # return render(request, 'landing.html',
    #               context={'message':LogoutMessage})
#
# @login_required
# def UpdateInfoView(request):
#
#     context = None
#     current_form = None
#     user = User.objects.get(email = str(request.user))
#     # return HttpResponse(user.__dict__)
#     if request.method == 'GET':
#         current_form = UpdateInfoForm(initial={'first_name':user.first_name, 'last_name':user.last_name, 'user_email':user.email})
#     if request.method == 'POST':
#         current_form = UpdateInfoForm(request.POST)
#         if current_form.is_valid():
#             if user.check_password(request.POST['password']):
#                 if UpdateInfoUtil(current_form.cleaned_data, user):
#                     return redirect('/?status=user_info_updated')
#                 else:
#                     return Http404
#     return render(request, "update_info.html", context={"form":current_form})
# Contact GitHub API Training Shop Blog About

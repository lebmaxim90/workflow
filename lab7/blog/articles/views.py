from django.shortcuts import render
from django.shortcuts import render, redirect
from django.http import Http404
from .models import Article
from django.contrib.auth.models import User
from django.contrib.auth import login, authenticate

def archive(request):
    return render(request, 'archive.html', {"posts": Article.objects.all()})

def get_article(request, article_id):
    try:
        post = Article.objects.get(id=article_id)
        return render(request, 'article.html', {"post": post})
    except Article.DoesNotExist:
        raise Http404

def create_post(request):
    if not request.user.is_authenticated:
        raise Http404
    
    if request.method == "POST":
        form = {
            'text': request.POST["text"],
            'title': request.POST["title"]
        }
        
        if form["text"] and form["title"]:
            if Article.objects.filter(title=form["title"]).exists():
                form['errors'] = "Article with this title already exists"
                return render(request, 'create_post.html', {'form': form})
            
            article = Article.objects.create(
                text=form["text"],
                title=form["title"],
                author=request.user
            )
            return redirect('get_article', article_id=article.id)
        else:
            form['errors'] = "Not all fields are filled"
            return render(request, 'create_post.html', {'form': form})
    else:
        return render(request, 'create_post.html', {})
    
def register(request):
    if request.method == "POST":
        username = request.POST.get('username')
        email = request.POST.get('email')
        password = request.POST.get('password')
        password_confirm = request.POST.get('password_confirm')
        
        errors = {}
        
        if not username:
            errors['username'] = "Username is required"
        if not email:
            errors['email'] = "Email is required"
        if not password:
            errors['password'] = "Password is required"
        if not password_confirm:
            errors['password_confirm'] = "Password confirmation is required"
        
        if password and password_confirm and password != password_confirm:
            errors['password_match'] = "Passwords do not match"
        
        if username:
            try:
                User.objects.get(username=username)
                errors['username_exists'] = "Username already exists"
            except User.DoesNotExist:
                pass
        
        if errors:
            return render(request, 'register.html', {
                'errors': errors,
                'username': username,
                'email': email
            })
        
        user = User.objects.create_user(username, email, password)
        login(request, user)
        return redirect('archive')
    
    return render(request, 'register.html', {})

def user_login(request):
    if request.method == "POST":
        username = request.POST.get('username')
        password = request.POST.get('password')
        
        errors = {}
        
        if not username:
            errors['username'] = "Username is required"
        if not password:
            errors['password'] = "Password is required"
        
        if username and password:
            user = authenticate(request, username=username, password=password)
            if user is not None:
                login(request, user)
                return redirect('archive')
            else:
                errors['invalid'] = "Invalid username or password"
        
        return render(request, 'login.html', {
            'errors': errors,
            'username': username
        })
    
    return render(request, 'login.html', {})
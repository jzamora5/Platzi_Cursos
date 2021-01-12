""" Platzigram views """

# Django
from django.http import HttpResponse


# Utilities
from datetime import datetime
import json


def hello_world(request):
    """ Return a Greeting """
    now = datetime.now().isoformat()
    return HttpResponse(f"Current Server time is {now}")


def sort_integers(request):
    """ 
    Obtains a query string variable containint numbers 
    and sorts it 
    """
    # import pdb
    # pdb.set_trace()
    numbers = request.GET.get("numbers").split(',')
    sorted_ints = sorted([int(i) for i in numbers])
    data = {
        'status': 'ok',
        'numbers': sorted_ints,
        'message': "Integers Sorted Successfully"
    }
    return HttpResponse(json.dumps(data, indent=4),
                        content_type="application/json")


def say_hi(request, name, age):
    """ Says Hi to a user with variables in path """
    if age < 12:
        message = f"Sorry {name}, you are not allowed here"
    else:
        message = f"Hello, {name}, welcome to platzigram"

    return HttpResponse(message)

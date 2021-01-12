from posts.models import User
from datetime import date
users = [
    {
        "email": "cvander@platzi.com",
        "first_name": "Christian",
        "last_name": "Van der Henst",
        "password": "123456",
        "is_admin": True
    },
    {
        "email": "freddier@platzi.com",
        "first_name": "Freddy",
        "last_name": "Vega",
        "password": "9875343"
    },
    {
        "email": "yesica@platzi.com",
        "first_name": "Yesica",
        "last_name": "Cortes",
        "password": "qwerty",
        "birthdate": date(1990, 12, 19)
    },
    {
        "email": "arturo@platzi.com",
        "first_name": "Arturo",
        "last_name": "Martinez",
        "password": "msicomputer",
        "is_admin": True,
        "birthdate": date(1981, 11, 6)
    }
]


for user in users:
    obj = User(**user)
    obj.save()
    print(obj.pk, ':', obj.email)

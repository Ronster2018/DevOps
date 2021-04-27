'''
The Factory pattern
'''


class Dog:
    '''
    An example Dog class
    '''

    def __init__(self, name):
        self._name = name

    def speak(self):
        return "woof"


class Cat:
    '''
    An example Cat class
    '''

    def __init__(self, name):
        self._name = name

    def speak(self):
        return 'Meow'


def get_pet(pet='dog'):  # USed as a key in the dict object
    ''' The factory method used to crate our object.
    Create the objects and return them to the user
    '''

    pets = dict(dog=Dog('Hope'), cat=Cat('Peace'))
    return pets[pet]


d = get_pet('dog')

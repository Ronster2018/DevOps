""" 
The basics of creating and instantiating classes

Employee example
"""


# A class is a blueprint for creating instances
# Evenry employee created object created with this class is an Instance


class Employee:
    # Variables that remain the same across all instances
    raise_ammount = 1.04

    # The init method is run automatically as soon as the class is created
    def __init__(self, first, last, pay):
        # Instance variables
        self.first = first
        self.last = last
        self.pay = pay
        self.email = first + '.'+last+"@company.com"

    # Methods: functions that are associated with a class
    # Each method always takes the instance of the class(self). Can be called something else but best practice is self

    def fullname(self):
        return f'{self.first} {self.last}'

    def apply_raise(self):
        self.pay = int(self.pay * self.raise_ammount)


empOne = Employee('Bob', 'johannason', 100000)
empTwo = Employee('Kim', 'kimmerson', 120000)
empThree = Employee('Wonda', 'wonders', 150000)


# Instead of creating these attributes every single time we create a class, we add them to the inti method of the class Employee
# empOne.first = "Kron"
# empOne.last = "Simmons"
# empOne.email = "empOne@company.com"
# empOne.pay = 10000

class Animal:    
    def __init__(self, name, age, weight):
        self.name = name
        self.age = age
        self.weight = weight
        
    def eat(self):
        return f"{self.name} is eating"
    
    def sleep(self):
        return f"{self.name} is sleeping"
    
    def speak(self):
        return f"{self.name} is makes a sound"
    
    def __str__(self):
        return f"Name: {self.name}, Age: {self.age}, Weight: {self.weight}"
    

class Dog(Animal):
    def __init__(self, name, age, weight, breed):
        super().__init__(name, age, weight)
        self.breed = breed
    
    #@Override
    def speak(self):
        return f"{self.name} says: Woooooooooooooooof!"
    
    def fetch(self):
        return f"{self.name} is fetching the stick"
    
    
class Cat(Animal):
    def __init__(self, name, age, weight, species, color):
        super().__init__(name, age, weight)
        self.species = species
        self.color = color
    
    #@Override
    def speak(self):
        return f"{self.name} says: Meow!"
    
    def sit_in_box(self):
        return f"{self.name} is sitting in box"
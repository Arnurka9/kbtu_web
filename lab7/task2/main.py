from models import Animal, Dog, Cat

animal = Animal("King", 8, 190, "Lion")
dog = Dog("General Ruffs", 10, "Space hound dog")
cat = Cat("Murka", 2, 2, "Cat", "Ginger")

animals = [animal, dog, cat]

for a in animals:
    print(a)
    print(a.eat())
    print(a.sleep())
    print(a.speak())
    print()

print(dog.fetch())
print(cat.sit_in_box)
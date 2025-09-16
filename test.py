class Cat:
  def __init__(self, color, legs):
    self.color = color
    self.legs = legs

felix = Cat("ginger", 4)
rover = Cat("ginger", 4)
stumpy = Cat("brown", 3)

print(felix == rover)
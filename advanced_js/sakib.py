import math
class Quadrilateral():
    def __init__(self, a, b,c,d):
        self.a = a
        self.b = b
        self.c = c
        self.d = d
        
        # return f"The four dimension of the quadrilateral are {a} , {b} , {c}, {d}"
        print(f'dimensions are {a} , {b}, {c}, {d}')

    def propertiesOfQuadrilateral(self):
        if (self.a>0 and self.b>0 and self.c>0 and self.d>0):
            print("all the dimensions are ok.")
        else:
            print("Please insert positive numbers for the dimension")

    def areaOfQuadrilateral(self):
        semiperimeter = (self.a + self.b + self.c + self.d) / 2
        area = math.sqrt((semiperimeter - self.a) *
                         (semiperimeter - self.b) * 
                         (semiperimeter - self.c) * 
                         (semiperimeter - self.d))
        print('The area of Quadrilateral is: ', area)
    def perimeterOfQuadrilateral(self):
        perimeter = (self.a + self.b + self.c + self.d)
        print('The perimeter of Quadrilateral is: ', perimeter)

    
qdr = Quadrilateral(10,12,8,9)
qdr.propertiesOfQuadrilateral()
qdr.areaOfQuadrilateral()
qdr.perimeterOfQuadrilateral()
    

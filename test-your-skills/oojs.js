/*
    In this task we provide you with the start of a definition for a Shape class.
    It has three properties: name, sides, and sideLength.
    This class only models shapes for which all sides are the same length,
    like a square or an equilateral triangle.

    We'd like you to:

        Add a constructor to this class.
        The constructor takes arguments for the name, sides, and sideLength properties, and initializes them.
        Add a new method calcPerimeter() method to the class,
        which calculates its perimeter (the length of the shape's outer edge) and logs the result to the console.
        Create a new instance of the Shape class called square.
        Give it a name of square and a sideLength of 5.
        Call your calcPerimeter() method on the instance,
        to see whether it logs the calculation result to the browser's console as expected.
        Create a new instance of Shape called triangle, with a name of triangle and a sideLength of 3.
        Call triangle.calcPerimeter() to check that it works OK.
*/

class Shape {
    name;
    sides;
    sideLength;

    constructor(name, sides, sideLength){
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }

    calcPerimeter(){
        console.log(this.sides * this.sideLength);
    }
}

const square = new Shape('square', 4, 5);
const triangle = new Shape('triangle', 3, 20);

square.calcPerimeter();
triangle.calcPerimeter();


/*
    Next we'd like you to create a Square class that inherits from Shape,
    and adds a calcArea() method that calculates the square's area.
    Also set up the constructor so that the name property of Square object instances is automatically set to square,
    and the sides property is automatically set to 4. When invoking the constructor,
    you should therefore just need to provide the sideLength property.

    Create an instance of the Square class called square with appropriate property values,
    and call its calcPerimeter() and calcArea() methods to show that it works OK.
*/

class Square extends Shape {

    constructor(sideLength){
        super('square', 4, sideLength);
    }

    calcArea(){
        console.log(this.sideLength ** 2);
    }
}

const square2 = new Square(4);
console.log(square2);
square2.calcArea();
package shapes;

public class Circle extends Shape {
    // attributs
    double radius = 10;
    static double pi = 3.14f;

    // constructors
    public Circle() {
        super();
    }

    public Circle(double radius) {
        this.radius = radius;
        double pi = 3.14f;
    }

    // methods

    public String toString() {
        return "Circle: radius: " + this.radius + "\n  circumference:" + this.calculerPerimeter() + "\n  area:"
                + this.calculerArea();
    }

    @Override
    public double calculerPerimeter() {
        return 2 * pi * radius;
    }

    @Override
    public double calculerArea() {
        return pi * radius * radius;

    }
}

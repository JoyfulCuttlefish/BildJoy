package shapes;

public class Rectangle extends Shape {

    // attributs
    protected int length;
    protected int width;

    // constructors
    public Rectangle() {
    }

    public Rectangle(int length, int width) {

        this.length = length;
        this.width = width;
    }

    public String toString() {

        return "Rectangle: length: " + this.length + ", width: " + this.width + "\n perimeter: "
                + this.calculerPerimeter() + "\n area: " + this.calculerArea();
    }

    @Override
    public double calculerPerimeter() {
        return 2 * (length + width);
    }

    @Override
    public double calculerArea() {
        return length * width;
    }

}

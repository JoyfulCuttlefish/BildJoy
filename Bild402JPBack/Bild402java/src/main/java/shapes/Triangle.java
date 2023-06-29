package shapes;

public class Triangle extends Shape {
    // attributs
    private int side1;
    private int side2;
    private int side3;

    // Constructor
    public Triangle() {
        super(); // mot clé, donne accès aux attributs,méthodes de Shape
    }

    public Triangle(int side1, int side2, int side3) {
        super();
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;

    }

    public String toString() {
        return "Triangle: side 1: " + side1 + "; side 2: " + side2 + "; side 3: " + side3 + "\n perimeter: "
                + calculerPerimeter() + "\n area: " + calculerArea();
    }

    @Override
    public double calculerPerimeter() {
        return side1 + side2 + side3;
    }

    @Override
    public double calculerArea() {
        double s = (side1 + side2 + side3) / 2;
        double areaTriangle = Math.sqrt(s * (s - side1) * (s - side2) * (s - side3));
        return areaTriangle;

    }
}

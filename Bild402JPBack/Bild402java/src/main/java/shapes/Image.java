package shapes;

import java.util.ArrayList;

public class Image {

    // attributs
    private int id;
    private ArrayList<Shape> shapes;

    // constructors
    public Image(int id) {
        id++;
        shapes = new ArrayList<Shape>();
    }

    // methods
    public ArrayList<Shape> getShapes() {
        return this.shapes;
    }

    public int getNumberOfShapes() {
        return this.shapes.size();
    }

    public void addShape(Shape s) {
        this.shapes.add(s);
    }

    public double getTotalPerimeter() {
        double totalPerimeter = 0;
        for (Shape s : this.getShapes()) {
            totalPerimeter += s.calculerPerimeter();
        }
        return totalPerimeter;
    }

    public double getTotalArea() {
        double totalArea = 0;
        for (Shape s : this.getShapes()) {
            totalArea += s.calculerArea();
        }
        return totalArea;
    }

    public String toString() {
        return "\nYour Bild consists of " + this.getNumberOfShapes() + " shapes \nThe total perimeter is: "
                + this.getTotalPerimeter() + "\nThe total area is: " + this.getTotalArea();
    }

    public static double createMultipleCirclesPerimeter(int numberOfMultiples) {
        double totalPerimeter = 0;
        for (int index = 0; index < numberOfMultiples; index++) {
            Shape s = new Circle(5);
            totalPerimeter = (totalPerimeter + s.calculerPerimeter());
        }
        return totalPerimeter;
    }

    public static double createMultipleCirclesArea(int numberOfMultiples) {
        double totalArea = 0;
        for (int index = 0; index < numberOfMultiples; index++) {
            Shape s = new Circle(5);
            totalArea = (totalArea + s.calculerArea());
        }
        return totalArea;
    }

    public static double createMultipleRectanglesPerimeter(int numberOfMultiples) {
        double totalPerimeter = 0;
        for (int index = 0; index < numberOfMultiples; index++) {
            Shape s = new Rectangle(8,4);
            totalPerimeter = (totalPerimeter + s.calculerPerimeter());
        }
        return totalPerimeter;
    }

    public static int createMultipleRectanglesArea(int numberOfMultiples) {
        int totalArea = 0;
        for (int index = 0; index < numberOfMultiples; index++) {
            Shape s = new Rectangle(8,4);
            totalArea = (totalArea + (int) s.calculerArea());
        }
        return totalArea;

    }

    public static int createMultipleTrianglesPerimeter(int numberOfMultiples) {
        int totalPerimeter = 0;
        for (int index = 0; index < numberOfMultiples; index++) {
            Shape s = new Triangle(5, 5, 5);
            totalPerimeter = (totalPerimeter + (int) s.calculerPerimeter());
        }
        return totalPerimeter;
    }

    public static int createMultipleTrianglesArea(int numberOfMultiples) {
        int totalArea = 0;
        for (int index = 0; index < numberOfMultiples; index++) {
            Shape s = new Triangle(5, 5, 5);
            totalArea = (totalArea + (int) s.calculerArea());
        }
        return totalArea;
    }
}
package shapes;

import org.junit.jupiter.api.Test;
import java.util.ArrayList;
import static org.junit.jupiter.api.Assertions.assertEquals;

public class ImageTest {
    @Test
    public void checkGetTotalPerimeter() {
        Image myImage1 = new Image(1);
        Circle circle1 = new Circle(5);
        myImage1.addShape(circle1);
        Rectangle rectangle1 = new Rectangle(8,4);
        myImage1.addShape(rectangle1);
        Triangle triangle1 = new Triangle(5,5,5);
        myImage1.addShape(triangle1);
        assertEquals(circle1.calculerPerimeter()+rectangle1.calculerPerimeter()+triangle1.calculerPerimeter(), myImage1.getTotalPerimeter());
    }
    @Test
    public void testGetNumberOfShapes(){
        Image myImage1 = new Image(1);
        Circle circle1 = new Circle(5);
        myImage1.addShape(circle1);
        assertEquals(1,myImage1.getNumberOfShapes());
    }
    @Test
    public void testAddShapes(){
        Image image1 = new Image(1);
        Circle circle1 = new Circle(5);
        image1.addShape(circle1);
        Rectangle rectangle1 = new Rectangle(8,4);
        image1.addShape(rectangle1);
        assertEquals(2, image1.getNumberOfShapes());
    }
    @Test
    public void testGetShapes(){
        ArrayList<Shape> multipleShapes = new ArrayList<>();
        Circle circle1 = new Circle(5);
        multipleShapes.add(circle1);
        Rectangle rectangle1 = new Rectangle(8,4);
        multipleShapes.add(rectangle1);
        Triangle triangle1 = new Triangle(5,5,5);
        multipleShapes.add(triangle1);
        Image image1 = new Image(1);
        image1.addShape(circle1);
        image1.addShape(rectangle1);
        image1.addShape(triangle1);
        assertEquals(multipleShapes, image1.getShapes());
    }
    @Test
    public void testGetTotalArea() {
        Image image1 = new Image(1);
        Circle circle1 = new Circle(5);
        image1.addShape(circle1);
        Rectangle rectangle1 = new Rectangle(8, 4);
        image1.addShape(rectangle1);
        Triangle triangle1 = new Triangle(5,5,5);
        image1.addShape(triangle1);
        assertEquals(circle1.calculerArea()+rectangle1.calculerArea()+triangle1.calculerArea(),image1.getTotalArea());
    }

    @Test
    public void testCreateMultipleCirclesPerimeter() {
        Image image1 = new Image(1);
        Circle circle1 = new Circle(5);
        image1.addShape(circle1);
        image1.addShape(circle1);
        image1.addShape(circle1);
        assertEquals(circle1.calculerPerimeter()+circle1.calculerPerimeter()+circle1.calculerPerimeter(), image1.createMultipleCirclesPerimeter(3));
    }
    @Test
    public void testCreateMultipleCirclesArea() {
        Image image1 = new Image(1);
        Circle circle1 = new Circle(5);
        image1.addShape(circle1);
        image1.addShape(circle1);
        image1.addShape(circle1);
        assertEquals(circle1.calculerArea()+circle1.calculerArea()+circle1.calculerArea(), image1.createMultipleCirclesArea(3));
    }
    @Test
    public void testCreateMultipleRectanglesPerimeter() {
        Image image1 = new Image(1);
        Rectangle rectangle1 = new Rectangle(8,4);
        image1.addShape(rectangle1);
        image1.addShape(rectangle1);
        image1.addShape(rectangle1);
        assertEquals(rectangle1.calculerPerimeter()+rectangle1.calculerPerimeter()+rectangle1.calculerPerimeter(), image1.createMultipleRectanglesPerimeter(3));
    }
    @Test
    public void testCreateMultipleRectanglesArea() {
        Image image1 = new Image(1);
        Rectangle rectangle1 = new Rectangle(8,4);
        image1.addShape(rectangle1);
        image1.addShape(rectangle1);
        image1.addShape(rectangle1);
        assertEquals(rectangle1.calculerArea()+rectangle1.calculerArea()+rectangle1.calculerArea(), image1.createMultipleRectanglesArea(3));
    }
}


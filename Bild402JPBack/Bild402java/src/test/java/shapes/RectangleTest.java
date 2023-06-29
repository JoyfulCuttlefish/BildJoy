package shapes;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class RectangleTest {

    @Test
    void testToString() {
        Rectangle rectangle1 = new Rectangle(8,4);
        assertEquals("Rectangle: length: 8, width: 4\n perimeter: 24.0\n area: 32.0", rectangle1.toString());
    }

    @Test
    void checkCalculerPerimeter() {
        Rectangle rectangle1 = new Rectangle(8,4);
        int rectanglePerimeter = rectangle1.length*2+rectangle1.width*2;
        assertEquals(rectanglePerimeter, rectangle1.calculerPerimeter());
    }

    @Test
    void checkCalculerArea() {
        Rectangle rectangle1 = new Rectangle(8,4);
        int rectangleArea = rectangle1.length*rectangle1.width;
        assertEquals(rectangleArea, rectangle1.calculerArea());
    }
}
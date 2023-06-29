package shapes;

import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class CircleTest {
    @Test
    public void checkCalculerPerimeter() {
        Circle circle1 = new Circle(5);
        assertEquals(circle1.radius*circle1.pi*2, circle1.calculerPerimeter());
    }

    @Test
    public void checkCalculerArea() {
        Circle circle1 = new Circle(5);
        assertEquals(circle1.pi*circle1.radius*circle1.radius, circle1.calculerArea());
    }
    @Test
    void testToString() {
        Circle circle1 = new Circle(5);
        assertEquals("Circle: radius: 5.0\n  circumference:31.400001049041748\n  area:78.50000262260437", circle1.toString());
    }

}

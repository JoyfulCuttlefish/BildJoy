package com.filrouge.bild.model;

        import jakarta.persistence.Column;
        import jakarta.persistence.Entity;
        import jakarta.persistence.Table;


@Entity
@Table(name = "triangle")
public class Triangle extends Shape {
    // attributs
    @Column(name = "side1")
    private double side1;
    @Column(name = "side2")
    private double side2;
    @Column(name = "side3")
    private double side3;

    // Constructor
    public Triangle() {
        super();
        side1 = 0;
        side2 = 0;
        side3 = 0;
        this.type = "triangle";
    }

    public Triangle(int x, int y,double side1, double side2, double side3) {
        super(x, y);
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
        this.type = "triangle";
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
package com.bildproject402.Bild402.model;

import jakarta.persistence.*;
import org.jetbrains.annotations.NotNull;

import java.util.List;

@Entity
@Table(name="image", uniqueConstraints = {@UniqueConstraint(columnNames = {"id"})})
public class Image {

    // attributs
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "name")
    private String name;

    @OneToMany(cascade = {CascadeType.ALL})
    @JoinColumn (name = "image_id", referencedColumnName = "id")
    private List<Shape> shapesList;


    // constructors
    public Image() {

      // this.shapesList = new ArrayList<>();
    }
    public Image(int id, String name, List<Shape> shapesList) {
        this.setId(id);
        this.setName(name);
        this.setShapesList(shapesList);;
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }
    public void setName(String name) {
        this.name = name;
    }
    public List<Shape> getShapesList() {
        return shapesList;
    }

    public void setShapesList(List<Shape> shapesList) {
        this.shapesList = shapesList;
    }

    // methods
    public void addShape (Shape s) {
        this.shapesList.add(s);
    }


    public void addShapes(@NotNull List<Shape> shapes) {
        this.shapesList.addAll(shapes);
    }

        public int getNumberOfShapes() {
        return this.shapesList.size();
    }

    public double getTotalPerimeter() {
        double totalPerimeter = 0;
        for (Shape s : shapesList) {
            totalPerimeter += s.calculerPerimeter();
        }
        return totalPerimeter;
    }

    public double getTotalArea() {
        double totalArea = 0;
        for (Shape s : shapesList) {
            totalArea += s.calculerArea();
        }
        return totalArea;
    }

    public String toString() {
        return "\nYour Bild consists of " + this.getNumberOfShapes() + " shapes \nThe total perimeter is: "
                + this.getTotalPerimeter() + "\nThe total area is: " + this.getTotalArea();
    }
    public void display() {
        System.out.println(this.toString());
    }


    public static int createMultipleCirclesPerimeter(int numberOfMultiples) {
        int totalPerimeter = 0;
        for (int index = 0; index < numberOfMultiples; index++) {
            Shape s = new Circle();
            totalPerimeter = (totalPerimeter + (int) s.calculerPerimeter());
        }
        return totalPerimeter;
    }

    public static int createMultipleCirclesArea(int numberOfMultiples) {
        int totalArea = 0;
        for (int index = 0; index < numberOfMultiples; index++) {
            Shape s = new Circle();
            totalArea = (totalArea + (int) s.calculerArea());
        }
        return totalArea;
    }

    public static int createMultipleRectanglesPerimeter(int numberOfMultiples) {
        int totalPerimeter = 0;
        for (int index = 0; index < numberOfMultiples; index++) {
            Shape s = new Rectangle();
            totalPerimeter = (totalPerimeter + (int) s.calculerPerimeter());
        }
        return totalPerimeter;
    }

    public static int createMultipleRectanglesArea(int numberOfMultiples) {
        int totalArea = 0;
        for (int index = 0; index < numberOfMultiples; index++) {
            Shape s = new Rectangle();
            totalArea = (totalArea + (int) s.calculerArea());
        }
        return totalArea;

    }

    public static int createMultipleTrianglesPerimeter(int numberOfMultiples) {
        int totalPerimeter = 0;
        for (int index = 0; index < numberOfMultiples; index++) {
            Shape s = new Triangle();
            totalPerimeter = (totalPerimeter + (int) s.calculerPerimeter());
        }
        return totalPerimeter;
    }

    public static int createMultipleTrianglesArea(int numberOfMultiples) {
        int totalArea = 0;
        for (int index = 0; index < numberOfMultiples; index++) {
            Shape s = new Triangle();
            totalArea = (totalArea + (int) s.calculerArea());
        }
        return totalArea;
    }

}
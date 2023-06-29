package com.bildproject402.Bild402.model;

import jakarta.persistence.*;

@Entity
@Table(name = "circle")
public class Circle extends Shape {
    // attributs

    @Column(name="radius")
    private double radius = 10;

    // constructors
    public Circle() {
        super();
        radius = 0;
        this.type = "circle";
    }

    public Circle(int x, int y, double radius) {
        super(x, y);
        this.radius = radius;
        this.type = "circle";
    }

    // methods
    public double getRadius() {return this.radius;}

    public void setRadius(int newRadius) {
        this.radius = newRadius;
    }

    @Override
    public String toString() {
        return "Circle: xPosition =" + this.getXPosition() +" " + " yPosition : " + this.getYPosition() + " " + " radius = " + " " +  radius  +"\nArea of circle is : " + calculerArea() + "\nCircumference of circle is : "   + calculerPerimeter();
    }
    public void display(){
        System.out.println(this.toString());
    }
    @Override
    public double calculerPerimeter() {
        return 2 * Math.PI * radius;
    }

    @Override
    public double calculerArea() {
        return Math.PI* radius * radius;
    }
}

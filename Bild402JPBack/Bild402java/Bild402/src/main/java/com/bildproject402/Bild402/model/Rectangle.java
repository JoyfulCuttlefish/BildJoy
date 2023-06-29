package com.bildproject402.Bild402.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "rectangle")
public class Rectangle extends Shape {

    // attributs
    @Column(name = "length")
    private double length;
    @Column(name = "width")
    private double width;

    // constructors
    public Rectangle() {
        super();
        length=0;
        width=0;
        this.type = "rectangle";
    }

    public Rectangle(int x, int y, double length, double width) {
        super(x, y);
        this.length = length;
        this.width = width;
        this.type = "rectangle";
    }
    //methods
    public double getLength() {return this.length;}
    public double getWidth() {return this.width;}
    public void setLength(double newLength) {this.length = newLength;}
    public void setWidth(double newWidth) {this.width = newWidth;}

    public String toString() {

        return "Rectangle: xPosition: " + this.getXPosition() + "\nyPosition: "+ this.getYPosition() +"length: " + this.length + ", width: " + this.width + "\n perimeter: "
                + this.calculerPerimeter() + "\n area: " + this.calculerArea();
    }

    @Override
    public double calculerPerimeter() {
        return 2 * (this.length + this.width);
    }

    @Override
    public double calculerArea() {
        return this.length * this.width;
    }

}

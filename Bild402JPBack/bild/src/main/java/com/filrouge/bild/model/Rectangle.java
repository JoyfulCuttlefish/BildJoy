package com.filrouge.bild.model;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;

@Entity
@Table(name = "rectangle")
public class Rectangle extends Shape {

    // attributs
    @Column(name = "height")
    private double height;
    @Column(name = "width")
    private double width;

    // constructors
    public Rectangle() {
        super();
        height=0;
        width=0;
        this.type = "rectangle";
    }

    public Rectangle(int id, String fill, int x, int y, double height, double width) {
        super(id, fill, x, y);
        this.height = height;
        this.width = width;
        this.type = "rectangle";
    }
    //methods
    public double getHeight() {return this.height;}
    public double getWidth() {return this.width;}
    public void setHeight(double height) {this.height = height;}
    public void setWidth(double width) {this.width = width;}

    public String toString() {

        return "Rectangles have a height of: " + this.height + ", and a width of: " + this.width ;
    }


}
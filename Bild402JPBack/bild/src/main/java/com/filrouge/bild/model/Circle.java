package com.filrouge.bild.model;


import jakarta.persistence.*;

@Entity
@Table(name = "circle")
public class Circle extends Shape {
    // attributs

    @Column(name="radius")
    private double radius;

    // constructors
    public Circle() {
        super();
        radius = 0;
        this.type = "circle";
    }

    public Circle(int id, String fill, int x, int y, double radius) {
        super(id, fill, x, y);
        this.radius = radius;
        this.type = "circle";
    }

    // methods
    public double getRadius() {return this.radius;}

    public void setRadius(int radius) {
        this.radius = radius;
    }

    @Override
    public String toString() {
        return "Circles have a radius of: " +  radius ;
    }
    public void display(){
        System.out.println(this.toString());
    }

}
package com.filrouge.bild.model;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.Table;


@Entity
@Table(name = "triangle")
public class Triangle extends Shape {
    // attributs
    @Column(name = "sides")
    private double sides;
    @Column(name = "radius")
    private double radius;

    // Constructor
    public Triangle() {
        super();
        sides = 0;
        radius = 0;
        this.type = "triangle";
    }

    public Triangle(int id, String fill, int x, int y,double sides, double radius) {
        super(id, fill, x, y);
        this.sides = sides;
        this.radius = radius;
        this.type = "triangle";
    }

    public String toString() {
        return "Triangles have " + sides + " sides; and a radius of: " + radius;
    }

}
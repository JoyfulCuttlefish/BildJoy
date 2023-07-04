package com.filrouge.bild.model;

import com.fasterxml.jackson.annotation.JsonSubTypes;
import com.fasterxml.jackson.annotation.JsonTypeInfo;
import com.fasterxml.jackson.annotation.JsonTypeInfo.As;
import jakarta.persistence.*;
import lombok.Data;

@JsonTypeInfo(use = JsonTypeInfo.Id.NAME, include = As.PROPERTY, property = "type")
@JsonSubTypes({
        @JsonSubTypes.Type(value = Circle.class, name = "circle"),
        @JsonSubTypes.Type(value = Rectangle.class, name = "rectangle"),
        @JsonSubTypes.Type(value = Triangle.class, name = "triangle")
})

@Data
@Entity
@Table(name = "shape")
@Inheritance(strategy = InheritanceType.JOINED)
public abstract class Shape {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    protected int id;
    protected int x, y;

    @Column(name = "type")
    protected String type;

    @Column(name = "fill")
    protected String fill;

    public Shape() {
        this.x = 0;
        this.y = 0;
    }
    public Shape(int x, int y) {
        this.x = x;
        this.y = y;
    }

    public Shape(int id, String fill, int x, int y) {
        this.id = id;
        this.fill = fill;
        this.x = x;
        this.y = y;
    }


    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public int getX() {
        return this.x;
    }
    public void setX(int x) {
        this.x = x;
    }
    public int getY() {
        return this.y;
    }
    public void setY(int y) {
        this.y = y;
    }

    public String getFill() {return fill;}
    public void setFill(String fill) {this.fill = fill;}

    @Override
    public String toString() {
        return "Shape [id=" + id + ", x=" + x + ", y=" + y + ", fill=" + fill + "]";
    }



    public void display() {
        System.out.println(this.toString());
    }
}
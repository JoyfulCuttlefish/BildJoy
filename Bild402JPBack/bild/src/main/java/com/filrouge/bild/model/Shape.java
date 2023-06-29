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

    public Shape() {
        this.x = 0;
        this.y = 0;
    }
    public Shape(int x, int y) {
        this.x = x;
        this.y = y;
    }
    public int getId() {
        return id;
    }
    public void setId(int id) {
        this.id = id;
    }
    public int getXPosition() {
        return this.x;
    }
    public void setXPosition(int x) {
        this.x = x;
    }
    public int getYPosition() {
        return this.y;
    }
    public void setYPosition(int y) {
        this.y = y;
    }

    public abstract String toString();

    public abstract double calculerPerimeter();

    public abstract double calculerArea();

    public void display() {
        System.out.println(this.toString());
    }
}
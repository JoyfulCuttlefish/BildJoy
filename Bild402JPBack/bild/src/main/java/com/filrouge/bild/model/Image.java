package com.filrouge.bild.model;


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


    public String toString() {
        return "\nYour Bild consists of " + this.getNumberOfShapes() + " shapes.";
    }
    public void display() {
        System.out.println(this.toString());
    }

}
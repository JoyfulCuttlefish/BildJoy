package com.filrouge.bild.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;

import com.filrouge.bild.model.Shape;
import com.filrouge.bild.service.ShapeService;




@RestController
@CrossOrigin(origins = "*")
public class ShapeController {
    @Autowired
    private ShapeService shapeService;

    @GetMapping("/shapes")
    public Iterable<Shape> getShapes() {
        return shapeService.getShapes();
    }

    @GetMapping(path = "/shapes/{id}")
    public Shape getShapeById(@PathVariable(value = "id") int id){
        Shape shape = shapeService.getShape(id);
        return this.shapeService.getShape(id);
    }

    @PostMapping(value = "/shapes/add", produces = "application/json; charset=utf-8", consumes= MediaType.APPLICATION_JSON_VALUE)
    public Shape addShape(@RequestBody Shape shape) {
        return this.shapeService.saveShape(shape);
    }

    @DeleteMapping("/shapes/{id}")
    public void deleteById(@PathVariable int id) {
        this.shapeService.deleteShape(id);
    }

}

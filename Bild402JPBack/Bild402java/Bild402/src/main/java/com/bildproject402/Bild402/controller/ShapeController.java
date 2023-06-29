package com.bildproject402.Bild402.controller;

import com.bildproject402.Bild402.model.Shape;
import com.bildproject402.Bild402.service.ShapeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.*;




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



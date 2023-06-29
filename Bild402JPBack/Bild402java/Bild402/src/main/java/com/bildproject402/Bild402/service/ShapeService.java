package com.bildproject402.Bild402.service;

import com.bildproject402.Bild402.model.Shape;
import com.bildproject402.Bild402.repository.ShapeRepository;
import lombok.Data;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Data
@Service
public class ShapeService {
    @Autowired
    private ShapeRepository shapeRepository;


    public Iterable<Shape>getShapes() {return shapeRepository.findAll();}

    public Shape saveShape(Shape shape) {
        return shapeRepository.save(shape);
    }

    public Shape getShape(int id){return shapeRepository.findById(id);}
    public void updateShape(Shape shape) {
        shapeRepository.save(shape);
    }

    public void deleteShape(int id) {
        shapeRepository.deleteById(id);
    }
}

package com.bildproject402.Bild402.service;

import com.bildproject402.Bild402.model.Image;
import com.bildproject402.Bild402.model.Shape;
import com.bildproject402.Bild402.repository.ImageRepository;
import com.bildproject402.Bild402.repository.ShapeRepository;
import jakarta.persistence.EntityNotFoundException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;

@Service
public class ImageService {
    @Autowired
    ImageRepository imageRepository;
    @Autowired
    ShapeRepository shapeRepository;

    public List<Image> getImages(){
        return imageRepository.findAll();
    }
    public Image saveImage(Image image){
        return imageRepository.save(image);
    }

    public Image getImage(int id){return imageRepository.findById(id);}

    public List<Shape> getShapesByImageId(int id) {
        Image image = imageRepository.findById(id);
        if (image != null) {
            return image.getShapesList();
        } else {
            throw new EntityNotFoundException("Image with id " + id + " not found");
        }
    }

    public void addShapesToImage(int id, List<Integer> shapeIds) {
        Image image = imageRepository.findById(id);
        if (image != null) {
            List<Shape> shapes = new ArrayList<>();
            for (int shapeId : shapeIds) {
                Shape shape = shapeRepository.findById(shapeId);
                if (shape != null) {
                    shapes.add(shape);
                } else {
                    throw new EntityNotFoundException("Shape with id " + shapeId + " not found");
                }
            }
            image.addShapes(shapes);
            imageRepository.save(image);
        } else {
            throw new EntityNotFoundException("Drawing with id " + id + " not found");
        }
    }

    public Image updateImage(Image image, int id){imageRepository.save(image);
        return image;
    }

    public void deleteImage(int id){imageRepository.deleteById(id);}

    public Image getImageById(int id) {
        return imageRepository.findById(id);
    }
}




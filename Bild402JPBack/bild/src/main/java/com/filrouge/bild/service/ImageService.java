package com.filrouge.bild.service;

        import jakarta.persistence.EntityNotFoundException;
        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.stereotype.Service;

        import java.util.ArrayList;
        import java.util.List;

        import com.filrouge.bild.model.Image;
        import com.filrouge.bild.model.Shape;
        import com.filrouge.bild.repository.ImageRepository;
        import com.filrouge.bild.repository.ShapeRepository;

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

    public Image getShapesByImageId(int id) {
        return imageRepository.findById(id);

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

package com.filrouge.bild.controller;

        import jakarta.persistence.EntityNotFoundException;
        import org.springframework.beans.factory.annotation.Autowired;
        import org.springframework.web.bind.annotation.*;

        import java.util.List;

        import com.filrouge.bild.model.Image;
        import com.filrouge.bild.service.ImageService;
        import com.filrouge.bild.service.ShapeService;
        import com.filrouge.bild.model.Shape;
        import org.springframework.web.multipart.MultipartFile;

//@RequestMapping()
@CrossOrigin(origins = "*")

@RestController
public class ImageController {

    @Autowired
    public ImageService imageService;
    @Autowired
    public ShapeService shapeService;

    public Image image;

    @GetMapping("/images")
    public List<Image> getImages(){
        return imageService.getImages();
    }

    @GetMapping(path = "/images/{id}")
    public Image getImageById(@PathVariable("id") int id){
        Image image = imageService.getImage(id);
        return imageService.getImage(id);
    }

    @GetMapping("images/{id}/shapes")
    public List<Shape> getShapesByImageId(@PathVariable int id) {
        Image image = imageService.getShapesByImageId(id);
        if (image != null) {
            return image.getShapesList();
        } else {
            throw new EntityNotFoundException("Image with id " + id + " not found");
        }
    }

    @PostMapping("/images/add")
    public Image addImage(@RequestParam("name") String name, @RequestParam("shapes") List shapes) {
        // Save the file to disk or to a database
        // Create an Image object and set its properties including the path to the uploaded file
        Image image = new Image();
        image.setName(name);
        image.setShapesList(shapes);
        return imageService.saveImage(image);
    }

    @PutMapping("/images/{id}")
    public Image updateImage(@RequestBody Image image,
                             @PathVariable("id") int id){
        return imageService.updateImage(image, id);
    }


    @DeleteMapping("/images/{id}")
    public void deleteById(@PathVariable int id) {
        this.imageService.deleteImage(id);
    }

}
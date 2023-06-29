package com.bildproject402.Bild402.controller;

import com.bildproject402.Bild402.model.Image;
import com.bildproject402.Bild402.service.ImageService;
import com.bildproject402.Bild402.service.ShapeService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;


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

    @PostMapping("/images/add")
    public Image addImage(@RequestBody Image image) {
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

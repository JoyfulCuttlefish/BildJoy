package com.filrouge.bild.repository;


        import org.springframework.data.jpa.repository.JpaRepository;
        import org.springframework.stereotype.Repository;
        import com.filrouge.bild.model.Shape;

@Repository
public interface ShapeRepository extends JpaRepository<Shape, Integer> {
    Shape findById(int id);
}
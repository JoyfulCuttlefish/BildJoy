package com.bildproject402.Bild402.repository;

import com.bildproject402.Bild402.model.Shape;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShapeRepository extends JpaRepository<Shape, Integer> {
    Shape findById(int id);
}

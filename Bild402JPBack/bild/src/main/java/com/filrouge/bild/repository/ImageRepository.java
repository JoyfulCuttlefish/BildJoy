package com.filrouge.bild.repository;

        import org.springframework.data.jpa.repository.JpaRepository;
        import org.springframework.stereotype.Repository;
        import com.filrouge.bild.model.Image;


@Repository
public interface ImageRepository extends JpaRepository<Image, Integer> {
    Image findById(int id);
}
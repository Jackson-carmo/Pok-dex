package br.com.jackson.backendpokedex.repositories;

import br.com.jackson.backendpokedex.models.Pokedex;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository
public interface PokedexRepository extends JpaRepository<Pokedex, Long> {

    @Query("FROM Pokedex p " +
            "WHERE LOWER(p.pokemon) like %:searchTerm% " +
            "OR LOWER(p.numero) like %:searchTerm%")
    Page<Pokedex> search(
            @Param("searchTerm") String searchTerm,
            Pageable pageable);

    @Query("SELECT p FROM Pokedex p WHERE p.type LIKE %:type%")
    Page<Pokedex> findByType(@Param("type") String type, Pageable pageable);
}

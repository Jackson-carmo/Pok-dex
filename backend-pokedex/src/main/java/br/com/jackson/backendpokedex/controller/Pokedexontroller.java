package br.com.jackson.backendpokedex.controller;

import br.com.jackson.backendpokedex.models.Pokedex;
import br.com.jackson.backendpokedex.service.PokedexService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/pokedex")
@CrossOrigin(origins = "*")
public class Pokedexontroller {

    @Autowired
    private PokedexService pokedexService;

    @GetMapping("/{id}")
    public Optional<Pokedex> findById(@PathVariable Long id) {
        return pokedexService.findById(id);
    }

    @GetMapping
    public Page<Pokedex> findAll(Pageable pageable) {
        return pokedexService.findAll(pageable);
    }

    @GetMapping("/search")
    public Page<Pokedex> search(@RequestParam("searchTerm") String searchTerm, Pageable pageable) {
        return pokedexService.search(searchTerm, pageable);
    }

    @GetMapping("/search/type")
    public Page<Pokedex> findByType(@RequestParam(name = "type", required = true) String type, Pageable pageable){
        Page<Pokedex> pokedexPage = pokedexService.findByType(type, pageable);
        return pokedexPage;
    }

    @PostMapping("/create")
    public ResponseEntity<?> save(@RequestBody Pokedex pokedex) {
        return pokedexService.save(pokedex);
    }
}

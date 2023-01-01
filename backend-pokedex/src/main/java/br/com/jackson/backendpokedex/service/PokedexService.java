package br.com.jackson.backendpokedex.service;

import br.com.jackson.backendpokedex.models.Pokedex;
import br.com.jackson.backendpokedex.models.Resposta;
import br.com.jackson.backendpokedex.repositories.PokedexRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PokedexService {

    @Autowired
    private PokedexRepository pokedexRepository;

    @Autowired
    private Resposta resposta;

    public Optional<Pokedex> findById(Long id) {
        return pokedexRepository.findById(id);
    }

    public Page<Pokedex> findAll(Pageable pageable) {
        return pokedexRepository.findAll(pageable);
    }

    public Page<Pokedex> search(String searchTerm, Pageable pageable) {
        return pokedexRepository.search(searchTerm, pageable);
    }

    public Page<Pokedex> findByType(String type, Pageable pageable) {
        Page<Pokedex> pokedexPage = pokedexRepository.findByType(type, pageable);
        return pokedexPage;
    }

    public ResponseEntity<?> save(Pokedex pokedex) {
         if (pokedex.getAltura().equals("")) {
            resposta.setMensagem("A altura do pokemon e obrigatorio!");
            return new ResponseEntity<Resposta>(resposta, HttpStatus.BAD_REQUEST);
        } else if (pokedex.getPeso().equals("")) {
            resposta.setMensagem("O peso do pokemon e obrigatorio!");
            return new ResponseEntity<Resposta>(resposta, HttpStatus.BAD_REQUEST);
        }else {
            return new ResponseEntity<Pokedex>(pokedexRepository.saveAndFlush(pokedex), HttpStatus.CREATED);
        }
    }


}

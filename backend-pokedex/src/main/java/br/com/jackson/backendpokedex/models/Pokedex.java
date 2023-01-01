package br.com.jackson.backendpokedex.models;

import jakarta.persistence.*;
import jakarta.validation.constraints.NotEmpty;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.hibernate.validator.constraints.Length;

import java.util.ArrayList;
import java.util.List;

@Entity
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Pokedex {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @NotEmpty
    @Column(nullable = false, unique = true)
    @Length(min = 3, max = 150)
    private String pokemon;

    @NotEmpty
    @Column(nullable = false)
    @Length(min = 3, max = 170)
    private String type;

    @NotEmpty
    @Column(nullable = false)
    @Length(min = 3, max = 70)
    private String numero;
    @NotEmpty
    @Column(nullable = false)
    @Length(min = 3, max = 70)
    private String categoria;
    @NotEmpty
    @Column(nullable = false)
    @Length(min = 3, max = 130)
    private String habilidades;
    @Column(nullable = false)
    private Double altura;
    @Column(nullable = false)
    private Double peso;
    @NotEmpty
    @Column(nullable = false)
    @Length(min = 3, max = 130)
    private String fraquezas;
    @NotEmpty
    @Column(nullable = false)
    @Length(min = 3, max = 2000)
    private String pokemonImg;


}

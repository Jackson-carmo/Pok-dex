package br.com.jackson.backendpokedex.models;

import lombok.Data;
import org.springframework.stereotype.Component;

@Component
@Data
public class Resposta {

    private String mensagem;
}


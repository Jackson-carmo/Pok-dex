import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Pokedex } from "../../types/pokedex";
import { BASE_URL } from "../../utils/requests";
import "./styles.css";


function FormCard( ) {

  const [pokedex, setPokedex] = useState<Pokedex>();

  const { id } = useParams();

  useEffect(() => {
    loadPokemon();
  });

  const loadPokemon = async () => {
    const response = await axios.get(`${BASE_URL}/pokedex/${id}`);
    setPokedex(response.data);
  };

  return (
    <div className="form-card-container">
      <div className="form-card-btn">
        <Link to={'/'}>
          <button className="form-btn">Voltar</button>
        </Link>
      </div>
      <div className="form-card-header">
        <h2>{pokedex?.pokemon}</h2>
        <p>Nº {pokedex?.numero}</p>

        
      </div>

      <img
          className="form-card-img"
          src={pokedex?.pokemonImg}
        />

      <div>
        <table className="form-card-table">
          <thead>
            <tr>
              <th>Altura</th>
              <th>Categoria</th>
              <th>Type</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{pokedex?.altura} m</td>
              <td>{pokedex?.categoria}</td>
              <td>{pokedex?.type}</td>
            </tr>
          </tbody>
          <thead>
            <tr>
              <th>Peso</th>
              <th>Habilidades</th>
              <th>Fraquezas</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{pokedex?.peso} Kg</td>
              <td>{pokedex?.habilidades}</td>
              <td>{pokedex?.fraquezas}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="u"></div>
    </div>
  );
}

export default FormCard;

import { Pokedex } from "../../types/pokedex";
import { Link } from "react-router-dom";
import "./styles.css";

type Props = {
  pokedex: Pokedex;
}

function PokedexCard( {pokedex} : Props ) {

  

  return (
    <div className="pokedex-card">
      
      <div className="pokedex-container">
        <img
          className="pokedex-card-image"
          src={pokedex.pokemonImg}
        />
        <div className="pokedex-card-bottom-container">
          <h5>{pokedex.numero}</h5>
          <h3>{pokedex.pokemon}</h3>
          <p>{pokedex.type}</p>

          <div className="pokedex-btn-container">
            <Link to={`/pokemon/${pokedex.id}`} className="pokedex-btn">
              Saiba Mais
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PokedexCard;

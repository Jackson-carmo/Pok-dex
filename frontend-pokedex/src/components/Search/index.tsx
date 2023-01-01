import { Link } from "react-router-dom";
import "./style.css";

function Search() {
  return (
    <>
        <div className="form-card-btn">
        <Link to={'/'}>
          <button className="form-btn">Voltar</button>
        </Link>
      </div>
    <div className="pokemon-search">
        
        <h2 className="search-header">Pesquise por um Nome ou Número de um Pokémon.</h2>
      <input className="input-search" type="search" placeholder="Digite o nome ou número de um Pokemon"/>
    </div>
    </>
  );
}

export default Search;

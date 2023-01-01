import { PokedexPage } from "../../types/pokedex";
import './styles.css';

type Props = {
    page: PokedexPage;
    onChange: Function;
}

function Pagination({ page, onChange } : Props) {

    const arrow: string = require("../../assets/img/arrow.svg").default;
  return (
    <div className="pokedex-pagination-container">
      <div className="pokedex-pagination-box">
        <button className="pokedex-pagination-button" disabled={page.first} onClick={() => onChange(page.number - 1)}>
          <img src={arrow} alt="Arrow" />
        </button>
        <p>{`${page.number + 1 } de ${page.totalPages}`}</p>
        <button className="pokedex-pagination-button" disabled={page.last} onClick={() => onChange(page.number + 1)}>
        <img src={arrow} alt="Arrow" className="pokedex-flip-horizontal" />  
        </button>
      </div>
    </div>
  );
}

export default Pagination;
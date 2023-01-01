import axios from "axios";
import { useEffect, useState } from "react";
import Pagination from "../components/Pagination";
import PokedexCard from "../components/PokedexCard";
import { PokedexPage } from "../types/pokedex";
import { BASE_URL } from "../utils/requests";
function Listing() {
  const [pageNumber, setPageNumber] = useState(0);

  const [page, setPage] = useState<PokedexPage>({
    content: [],
    last: true,
    totalPages: 0,
    totalElements: 0,
    size: 6,
    number: 0,
    first: true,
    numberOfElements: 0,
    empty: true,
  });

  useEffect(() => {
    axios
      .get(`${BASE_URL}/pokedex?size=6&page=${pageNumber}&sort=id`)
      .then((response) => {
        const data = response.data as PokedexPage;
        setPage(data);
      });
  }, [pageNumber]);

  const handlePageChange = (newPageNumber: number) => {
    setPageNumber(newPageNumber);
  };

  const logo_search: string = require("../assets/img/search.svg").default;

  return (
    <>
      <div className="pokedex-card">
        <div className="pokedex-card">
          {page.content.map((pokedex) => (
            <div key={pokedex.id}>
              <PokedexCard pokedex={pokedex} />
            </div>
          ))}
        </div>
      </div>

      <Pagination page={page} onChange={handlePageChange} />
    </>
  );
}

export default Listing;

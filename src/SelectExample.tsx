import React, { useState } from "react";
import { Button, MenuItem } from "@blueprintjs/core";
import { Select2 } from "@blueprintjs/select";

import { Example } from "./Example";
import { filterFilm, renderFilm, IFilm, TOP_100_FILMS } from "./films";

const FilmSelect = Select2.ofType<IFilm>();

export const SelectExample: React.FC = () => {
  const [film, setFilm] = useState<IFilm>(TOP_100_FILMS[0]);
  return (
    <Example header="Select Sandbox">
      <FilmSelect
        items={TOP_100_FILMS}
        itemPredicate={filterFilm}
        itemRenderer={renderFilm}
        noResults={<MenuItem disabled={true} text="No results." />}
        onItemSelect={setFilm}
        className="film-select"
      >
        <Button text={film.title} rightIcon="caret-down" />
      </FilmSelect>
    </Example>
  );
};

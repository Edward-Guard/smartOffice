import { useState } from 'react';
import './SearchBar.css';
import { useHotkeys } from 'react-hotkeys-hook';

type SearchBarProps = {
  filter1: string;
  filter2: string;
  filter3: string;
  handleFilter: (e: any) => void;
  updateList?: ()=> void;
};

const defaultCurrent = { text: '', filter: 'Nome' };

function SearchBar(
  { filter1, filter2, filter3, handleFilter, updateList = () => {} }: SearchBarProps,
) {
  useHotkeys('alt+c', () => updateList());
  const [current, setCurrent] = useState(defaultCurrent);
  const handleCurrent = (e: any) => {
    const { value, name } = e;

    const newCurrent = (name !== 'filter') ? { ...current, text: e.value } : {
      ...current, filter: value,
    };
    handleFilter(newCurrent);
    setCurrent(newCurrent);
  };
  return (

    <div className="searchBar">
      <div className="search-create">
        <input
          name="searchInput"
          type="search"
          placeholder="Pesquisar"
          value={ current.text }
          className="searchInput"
          onChange={ (e) => handleCurrent(e.target) }
        />
        <button className="filterBtn" onClick={ updateList }>+ Criar</button>
      </div>

      <div className="filterBar">
        <label
          className={ `filterBtn ${current.filter === filter1 ? ' activeBtn' : ''}` }
          htmlFor="filter1"
        >
          <input
            className="radioBtn"
            id="filter1"
            name="filter"
            value={ filter1 }
            type="radio"
            onChange={ (e) => handleCurrent(e.target) }
          />
          {filter1}
        </label>
        <label
          className={ `filterBtn ${current.filter === filter2 ? ' activeBtn' : ''}` }
          htmlFor="filter2"
        >
          <input
            className="radioBtn"
            id="filter2"
            name="filter"
            value={ filter2 }
            type="radio"
            onChange={ (e) => handleCurrent(e.target) }
          />
          {filter2}
        </label>
        <label
          className={ `filterBtn ${current.filter === filter3 ? ' activeBtn' : ''}` }
          htmlFor="filter3"
        >
          <input
            className="radioBtn"
            id="filter3"
            name="filter"
            value={ filter3 }
            type="radio"
            onChange={ (e) => handleCurrent(e.target) }
          />
          {filter3}
        </label>
      </div>

    </div>
  );
}

export default SearchBar;

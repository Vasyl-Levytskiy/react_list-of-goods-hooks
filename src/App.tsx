import React, { useState } from 'react';
import 'bulma/css/bulma.css';
import './App.scss';

export const goodsFromServer = [
  'Dumplings',
  'Carrot',
  'Eggs',
  'Ice cream',
  'Apple',
  'Bread',
  'Fish',
  'Honey',
  'Jam',
  'Garlic',
];

enum SortType {
  Alphabet = 'alphabet',
  Length = 'length',
}

export const App: React.FC = () => {
  const [goods, setGoods] = useState<string[]>(goodsFromServer);
  const [, setSortType] = useState<SortType | null>(null);

  function sortAlphabetically() {
    const sorted = [...goods].sort((a, b) => a.localeCompare(b));

    setGoods(sorted);
    setSortType(SortType.Alphabet);
  }

  function sortByLength() {
    const sortedLength = [...goods].sort((a, b) => a.length - b.length);

    setGoods(sortedLength);
    setSortType(SortType.Length);
  }

  function reverseGoods() {
    const reversed = [...goods].reverse();

    setGoods(reversed);
  }

  function resetGoods() {
    setGoods(goodsFromServer);
    setSortType(null);
  }

  return (
    <div className="section content">
      <div className="buttons">
        <button
          type="button"
          className="button is-info is-light"
          onClick={sortAlphabetically}
        >
          Sort alphabetically
        </button>

        <button
          type="button"
          className="button is-success is-light"
          onClick={sortByLength}
        >
          Sort by length
        </button>

        <button
          type="button"
          className="button is-warning is-light"
          onClick={reverseGoods}
        >
          Reverse
        </button>

        <button
          type="button"
          className="button is-danger is-light"
          onClick={resetGoods}
        >
          Reset
        </button>
      </div>

      <ul>
        {goods.map(good => (
          <li key={good} data-cy="Good">
            {good}
          </li>
        ))}
      </ul>
    </div>
  );
};

import React from 'react';
import { famousGames } from '../../famous-games';
import styles from './FamousGames.module.css';

export default function FamousGames({ onSelectGame }) {
  return (
    <div className={styles.container}>
      <h2>Famous Games</h2>
      <ul>
        {famousGames.map((game, index) => (
          <li key={index}>
            <button onClick={() => onSelectGame(game.pgn)}>
              {game.name}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

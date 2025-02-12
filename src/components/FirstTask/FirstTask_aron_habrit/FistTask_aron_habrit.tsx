import styles from './FistTask_aron_habrit.module.css';
import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';

const ROWS = 3;
const COLS = 3;
const IMAGE_SRC = '/images/firstTask/aron-habrit.jpg';

const FistTask_aron_habrit = () => {
  const [pieces, setPieces] = useState<{ id: number; x: number; y: number; row: number; col: number }[]>([]);

  useEffect(() => {
    const shuffledPieces = [];
    for (let row = 0; row < ROWS; row++) {
      for (let col = 0; col < COLS; col++) {
        shuffledPieces.push({
          id: row * COLS + col,
          x: Math.random() * 300, 
          y: Math.random() * 300,
          row,
          col
        });
      }
    }
    setPieces(shuffledPieces);
  }, []);

  return (
    <div className={styles.puzzleContainer}>
      {pieces.map((piece) => (
        <Draggable key={piece.id}>
          <div
            className={styles.puzzlePiece}
            style={{
              backgroundImage: `url(${IMAGE_SRC})`,
              backgroundPosition: `-${piece.col * 100}px -${piece.row * 100}px`
            }}
          />
        </Draggable>
      ))}
    </div>
  );
};

export default FistTask_aron_habrit;

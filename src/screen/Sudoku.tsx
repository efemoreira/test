import React, {useEffect, useState} from 'react';
import {TextInput, View, Button} from 'react-native';

type SudokuBoard = number[][];

const SudokuCell = ({number, visible}: {number: number; visible: boolean}) => {
  const [numberString, setNumberString] = useState<string>('');

  return (
    <TextInput
      style={{
        borderWidth: 1,
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      value={visible ? number.toString() : numberString}
      editable={numberString !== number.toString()}
      onChangeText={text => {
        setNumberString(text);
      }}
    />
  );
};

const Sudoku = () => {
  const [sudoku, setSudoku] = useState<SudokuBoard>([]);
  let cellIndex = 0;

  const randomArray = Array.from({length: 12}, () =>
    Math.floor(Math.random() * 81),
  );

  useEffect(() => {
    const board = generateSudoku();
    setSudoku(board);
  }, []);

  // Generate random sudoku that passes validation
  function generateSudoku(): SudokuBoard {
    const board: SudokuBoard = [];
    for (let i = 0; i < 9; i++) {
      board.push([]);
      for (let j = 0; j < 9; j++) {
        board[i].push(0);
      }
    }

    const backtrack = (
      board: SudokuBoard,
      row: number,
      col: number,
    ): boolean => {
      if (row === 9) {
        return true;
      }

      if (col === 9) {
        return backtrack(board, row + 1, 0);
      }

      if (board[row][col] !== 0) {
        return backtrack(board, row, col + 1);
      }

      const digitSet = new Set<number>();
      for (let i = 0; i < 9; i++) {
        digitSet.add(board[row][i]);
        digitSet.add(board[i][col]);
        digitSet.add(
          board[Math.floor(row / 3) * 3 + Math.floor(i / 3)][
            Math.floor(col / 3) * 3 + (i % 3)
          ],
        );
      }

      const availableDigits = Array.from({length: 9}, (_, i) => i + 1)
        .filter(digit => !digitSet.has(digit))
        .sort(() => Math.random() - 0.5);

      for (const digit of availableDigits) {
        board[row][col] = digit;
        if (backtrack(board, row, col + 1)) {
          return true;
        }
      }

      board[row][col] = 0;
      return false;
    };

    backtrack(board, 0, 0);
    return board;
  }

  return (
    <View>
      <Button
        title="Generate Sudoku"
        onPress={() => {
          setSudoku(generateSudoku);
        }}
      />

      {sudoku.map((row, rowIndex) => (
        <View key={rowIndex}>
          <View style={{flexDirection: 'row'}}>
            {row.map((number, columnIndex) => {
              cellIndex++;
              return (
                <React.Fragment key={columnIndex}>
                  <SudokuCell
                    key={columnIndex}
                    number={number}
                    visible={randomArray.includes(cellIndex)}
                  />
                  {columnIndex % 3 === 2 && (
                    <View
                      key={`divider-${columnIndex}`}
                      style={{width: 4, backgroundColor: 'black'}}
                    />
                  )}
                </React.Fragment>
              );
            })}
          </View>
          {rowIndex % 3 === 2 && (
            <View
              key={`divider-${rowIndex}`}
              style={{height: 4, backgroundColor: 'black'}}
            />
          )}
        </View>
      ))}
    </View>
  );
};

export default Sudoku;

// Validate sudoku
// function validateSudoku(board: number[][]): boolean {
//   const isValidSet = (set: number[]): boolean => {
//     const digitSet = new Set<number>();
//     for (const num of set) {
//       if (num < 1 || num > 9 || digitSet.has(num)) {
//         return false;
//       }
//       digitSet.add(num);
//     }
//     return true;
//   };

//   // Verify rows and columns
//   for (let i = 0; i < 9; i++) {
//     const linha = board[i];
//     const coluna = board.map(row => row[i]);
//     if (!isValidSet(linha) || !isValidSet(coluna)) {
//       return false;
//     }
//   }

//   // Verify subgrids 3x3
//   for (let i = 0; i < 9; i += 3) {
//     for (let j = 0; j < 9; j += 3) {
//       const subgrade = [];
//       for (let x = 0; x < 3; x++) {
//         for (let y = 0; y < 3; y++) {
//           subgrade.push(board[i + x][j + y]);
//         }
//       }
//       if (!isValidSet(subgrade)) {
//         return false;
//       }
//     }
//   }

//   return true;
// }

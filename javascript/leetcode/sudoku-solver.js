/**
 * @param {character[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
/*
[['5','3','.',  '.','7','.',  '.','.','.'],
['6','.','.',  '1','9','5',  '.','.','.'],
['.','9','8',  '.','.','.',  '.','6','.'],

['8','.','.',  '.','6','.',  '.','.','3'],
['4','.','.',  '8','.','3',  '.','.','1'],
['7','.','.',  '.','2','.',  '.','.','6'],

['.','6','.',  '.','.','.',  '2','8','.'],
['.','.','.',  '4','1','9',  '.','.','5'],
['.','.','.',  '.','8','.',  '.','7','9']]
*/
var solveSudoku = function(board) {
  var raws = JSON.parse(JSON.stringify(board))
  var columns = [[], [], [], [], [], [], [], [], []]
  board.forEach(raws => {
    for (var i = 0; i < 9; i++) {
      columns[i].push(raws[i])
    }
  })
  var allFilledField = []
  var filledField = []
  var tryNumber = function (raw, column, number) {
    if (board[raw][column] === '.') {
      let hasError = false
      hasError = raws[raw].some(rawNumber => rawNumber == number)
      if (hasError) {
        return [raw, column, number]
      }
      hasError = columns[column].some(columnNumber => columnNumber == number)
      if (hasError) {
        return [raw, column, number]
      }
      hasError = checkMatricesError(raw, column, number, board)
      if (hasError) {
        return [raw, column, number]
      }
      fillInNumber(raw, column, number)
    }
  }
  var i = 0
  var j = 0
  var n = 0
  var errorField = []
  var nErrorCount = 0

  for (i = 0; i < 9; i++) {
    for (j = 0; j < 9; j++) {
      nErrorCount = 0
      for (n = 1; n <= 9; n++) {
        errorField = tryNumber(i, j, '' + n)
        if (errorField && errorField.length > 0) {
          nErrorCount += 1
          if (nErrorCount >= 9) {
            if (allFilledField && allFilledField.length) {
              fillInNumber(errorField[0], errorField[1], '.')
              var result = revertField(i, j, n)
            } else {
              console.log('no previous errorField', errorField)
              return []
            }
            i = result[0]
            j = result[1]
            n = result[2]
          }
        } else {
          // To next field
          continue
        }
      }
    }
  }

  function revertField (i, j, n) {
    var previousField = allFilledField[allFilledField.length - 1]
    fillInNumber(previousField[0], previousField[1], '.')
    allFilledField.splice(allFilledField.length - 1, 1)
    i = previousField[0]
    j = previousField[1]
    n = previousField[2]
    nErrorCount = parseInt(previousField[2])
    if (n >= 9) {
      return revertField(i, j, n)
    }
    return [i, j, n]
  }
  function checkMatricesError (raw, column, number, board) {
    if (raw < 3) {
      if (column < 3) {
        if (board[0][0] == number || board[0][1] == number || board[0][2] == number ||
          board[1][0] == number || board[1][1] == number || board[1][2] == number ||
          board[2][0] == number || board[2][1] == number || board[2][2] == number) {
          return true
        }
      } else if (column < 6) {
        if (board[0][3] == number || board[0][4] == number || board[0][5] == number ||
          board[1][3] == number || board[1][4] == number || board[1][5] == number ||
          board[2][3] == number || board[2][4] == number || board[2][5] == number) {
          return true
        }
      } else if (column < 9) {
        if (board[0][6] == number || board[0][7] == number || board[0][8] == number ||
          board[1][6] == number || board[1][7] == number || board[1][8] == number ||
          board[2][6] == number || board[2][7] == number || board[2][8] == number) {
          return true
        }
      }
    } else if (raw < 6) {
      if (column < 3) {
        if (board[3][0] == number || board[3][1] == number || board[3][2] == number ||
          board[4][0] == number || board[4][1] == number || board[4][2] == number ||
          board[5][0] == number || board[5][1] == number || board[5][2] == number) {
          return true
        }
      } else if (column < 6) {
        if (board[3][3] == number || board[3][4] == number || board[3][5] == number ||
          board[4][3] == number || board[4][4] == number || board[4][5] == number ||
          board[5][3] == number || board[5][4] == number || board[5][5] == number) {
          return true
        }
      } else if (column < 9) {
        if (board[3][6] == number || board[3][7] == number || board[3][8] == number ||
          board[4][6] == number || board[4][7] == number || board[4][8] == number ||
          board[5][6] == number || board[5][7] == number || board[5][8] == number) {
          return true
        }
      }
    } else if (raw < 9) {
      if (column < 3) {
        if (board[6][0] == number || board[6][1] == number || board[6][2] == number ||
          board[7][0] == number || board[7][1] == number || board[7][2] == number ||
          board[8][0] == number || board[8][1] == number || board[8][2] == number) {
          return true
        }
      } else if (column < 6) {
        if (board[6][3] == number || board[6][4] == number || board[6][5] == number ||
          board[7][3] == number || board[7][4] == number || board[7][5] == number ||
          board[8][3] == number || board[8][4] == number || board[8][5] == number) {
          return true
        }
      } else if (column < 9) {
        if (board[6][6] == number || board[6][7] == number || board[6][8] == number ||
          board[7][6] == number || board[7][7] == number || board[7][8] == number ||
          board[8][6] == number || board[8][7] == number || board[8][8] == number) {
          return true
        }
      }
    }
  }
  function fillInNumber (raw, column, number) {
    board[raw][column] = number
    raws[raw][column] = number
    columns[column][raw] = number
    if (number !== '.') {
      filledField = [raw, column, number]
      allFilledField.push(filledField)
    }
  }
};

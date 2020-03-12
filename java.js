const pawn = {
  "name": 'PAWN',
  "image": 'Assets/BlackPawn01.png',
  "enemy": false,
  "canMove": function (current) {
    if (current.pos[1] === 2) {
      var next = grid.find((x => x.pos.join() === [current.pos[0], current.pos[1] + 1].join()));
      var other = grid.find((x => x.pos.join() === [current.pos[0], current.pos[1] + 2].join()));
      if (next.contents)
        return [];
      else if (!next.contents && other.contents)
        return [next];
      else if (!next.contents && !other.contents)
        return [next, other];
    } else {
      var next = grid.find((x => x.pos.join() === [current.pos[0], current.pos[1] + 1].join()));
      if (next) {
        if (!next.contents)
          return [next];
        else
          return [];
      } else
        return [];
    }
  }
};

const rook = {
  "name": 'ROOK',
  "image": 'Assets/BlackRook01.png',
  "enemy": false,
  "canMove": function (current) {
    var holder = current;
    var holdArray = [];
    var direction = "negX";
    while (direction === "negX") {
      var nextPos = [holder.pos[0] - 1, holder.pos[1]];
      var next = grid.find(x => x.pos.join() === nextPos.join());
      if (next) {
        if (!next.contents) {
          holdArray.push(next);
          holder = next;
        } else if (next.contents.enemy) {

        } else {
          holder = current;
          direction = "posX";
        }
      } else {
        holder = current;
        direction = "posX";
      }
    }
    while (direction === "posX") {
      var nextPos = [holder.pos[0] + 1, holder.pos[1]];
      var next = grid.find(x => x.pos.join() === nextPos.join());
      if (next) {
        if (!next.contents) {
          holdArray.push(next);
          holder = next;
        } else {
          holder = current;
          direction = "negY";
        }
      } else {
        holder = current;
        direction = "negY";
      }
    }
    while (direction === "negY") {
      var next = grid.find(x => x.pos.join() === [holder.pos[0], holder.pos[1] - 1].join())
      if (next) {
        if (!next.contents) {
          holdArray.push(next);
          holder = next;
        } else {
          holder = current;
          direction = "posY";
        }
      } else {
        holder = current;
        direction = "posY";
      }
    }
    while (direction === "posY") {
      var next = grid.find(x => x.pos.join() === [holder.pos[0], holder.pos[1] + 1].join())
      if (next) {
        if (!next.contents) {
          holdArray.push(next);
          holder = next;
        } else {
          holder = current;
          break;
        }
      } else {
        holder = current;
        break;
      }
    }
    return holdArray;
  }
};

const knight = {
  "name": 'KNIGHT',
  "image": 'Assets/BlackKnight01.png',
  "enemy": false,
  "canMove": function (current) {
    var holdArray = [];
    var knights = [[-2, 1], [2, -1], [-2, -1], [2, 1], [1, 2], [1, -2], [-1, 2], [-1, -2]];
    var len = knights.length;
    for (var i = 0; i < len; i++) {
      next = grid.find(x => x.pos.join() === [(current.pos[0] + knights[i][0]), (current.pos[1] + knights[i][1])].join());
      if (next) {
        if (!next.contents)
          holdArray.push(next);
      }
    }
    return holdArray;
  }
};

const bishop = {
  "name": 'BISHOP',
  "image": 'Assets/BlackBishop01.png',
  "enemy": false,
  "canMove": function (current) {
    var holder = current;
    var holderArray = [];
    var direction = "upright";
    while (direction === "upright") {
      var next = grid.find(x => x.pos.join() === [holder.pos[0] + 1, holder.pos[1] + 1].join());
      if (next) {
        if (!next.contents) {
          holderArray.push(next);
          holder = next;
        } else {
          holder = current;
          direction = "upleft";
        }
      } else {
        holder = current;
        direction = "upleft";
      }
    }
    while (direction === "upleft") {
      var next = grid.find(x => x.pos.join() === [holder.pos[0] - 1, holder.pos[1] + 1].join());
      if (next) {
        if (!next.contents) {
          holderArray.push(next);
          holder = next;
        } else {
          holder = current;
          direction = "downleft";
        }
      } else {
        holder = current;
        direction = "downleft";
      }
    }
    while (direction === "downleft") {
      var next = grid.find(x => x.pos.join() === [holder.pos[0] - 1, holder.pos[1] - 1].join());
      if (next) {
        if (!next.contents) {
          holderArray.push(next);
          holder = next;
        } else {
          holder = current;
          direction = "downright";
        }
      } else {
        holder = current;
        direction = "downright";
      }
    }
    while (direction === "downright") {
      var next = grid.find(x => x.pos.join() === [holder.pos[0] + 1, holder.pos[1] - 1].join());
      if (next) {
        if (!next.contents) {
          holderArray.push(next);
          holder = next;
        } else {
          holder = current;
          break;
        }
      } else {
        holder = current;
        break;
      }
    }
    return holderArray;
  }
}

const queen = {
  "name": 'QUEEN',
  "image": 'Assets/BlackQueen01.png',
  "enemy": false,
  "canMove": function (current) {
    var holder = current;
    var holderArray = [];
    var direction = "negX";
    while (direction === "negX") {
      var nextPos = [holder.pos[0] - 1, holder.pos[1]];
      var next = grid.find(x => x.pos.join() === nextPos.join());
      if (next) {
        if (!next.contents) {
          holderArray.push(next);
          holder = next;
        } else {
          holder = current;
          direction = "posX";
        }
      } else {
        holder = current;
        direction = "posX";
      }
    }
    while (direction === "posX") {
      var nextPos = [holder.pos[0] + 1, holder.pos[1]];
      var next = grid.find(x => x.pos.join() === nextPos.join());
      if (next) {
        if (!next.contents) {
          holderArray.push(next);
          holder = next;
        } else {
          holder = current;
          direction = "negY";
        }
      } else {
        holder = current;
        direction = "negY";
      }
    }
    while (direction === "negY") {
      var next = grid.find(x => x.pos.join() === [holder.pos[0], holder.pos[1] - 1].join())
      if (next) {
        if (!next.contents) {
          holderArray.push(next);
          holder = next;
        } else {
          holder = current;
          direction = "posY";
        }
      } else {
        holder = current;
        direction = "posY";
      }
    }
    while (direction === "posY") {
      var next = grid.find(x => x.pos.join() === [holder.pos[0], holder.pos[1] + 1].join())
      if (next) {
        if (!next.contents) {
          holderArray.push(next);
          holder = next;
        } else {
          holder = current;
          direction = "upright";
        }
      } else {
        holder = current;
        direction = "upright";
      }
    }
    while (direction === "upright") {
      var next = grid.find(x => x.pos.join() === [holder.pos[0] + 1, holder.pos[1] + 1].join());
      if (next) {
        if (!next.contents) {
          holderArray.push(next);
          holder = next;
        } else {
          holder = current;
          direction = "upleft";
        }
      } else {
        holder = current;
        direction = "upleft";
      }
    }
    while (direction === "upleft") {
      var next = grid.find(x => x.pos.join() === [holder.pos[0] - 1, holder.pos[1] + 1].join());
      if (next) {
        if (!next.contents) {
          holderArray.push(next);
          holder = next;
        } else {
          holder = current;
          direction = "downleft";
        }
      } else {
        holder = current;
        direction = "downleft";
      }
    }
    while (direction === "downleft") {
      var next = grid.find(x => x.pos.join() === [holder.pos[0] - 1, holder.pos[1] - 1].join());
      if (next) {
        if (!next.contents) {
          holderArray.push(next);
          holder = next;
        } else {
          holder = current;
          direction = "downright";
        }
      } else {
        holder = current;
        direction = "downright";
      }
    }
    while (direction === "downright") {
      var next = grid.find(x => x.pos.join() === [holder.pos[0] + 1, holder.pos[1] - 1].join());
      if (next) {
        if (!next.contents) {
          holderArray.push(next);
          holder = next;
        } else {
          holder = current;
          break;
        }
      } else {
        holder = current;
        break;
      }
    }
    return holderArray;

  }
}

const king = {
  "name": 'KING',
  "image": 'Assets/BlackKing01.png',
  "enemy": false,
  "canMove": function (current) {
    var holderArray = [];
    var kings = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
    var len = kings.length;
    for (var i = 0; i < len; i++) {
      var next = grid.find(x => x.pos.join() === [current.pos[0] + kings[i][0], current.pos[1] + kings[i][1]].join())
      if (next) {
        if (!next.contents)
          holderArray.push(next);
      }
    }
    return holderArray;
  }
}

const grid = [
  {
    'cell': 'A01',
    'pos': [1, 1],
    'contents': rook
  },
  {
    'cell': 'A02',
    'pos': [1, 2],
    'contents': pawn
  },
  {
    'cell': 'A03',
    'pos': [1, 3],
    'contents': null
  },
  {
    'cell': 'A04',
    'pos': [1, 4],
    'contents': null
  },
  {
    'cell': 'A05',
    'pos': [1, 5],
    'contents': null
  },
  {
    'cell': 'A06',
    'pos': [1, 6],
    'contents': null
  },
  {
    'cell': 'A07',
    'pos': [1, 7],
    'contents': null
  },
  {
    'cell': 'A08',
    'pos': [1, 8],
    'contents': null
  },
  {
    'cell': 'B01',
    'pos': [2, 1],
    'contents': knight
  },
  {
    'cell': 'B02',
    'pos': [2, 2],
    'contents': pawn
  },
  {
    'cell': 'B03',
    'pos': [2, 3],
    'contents': null
  },
  {
    'cell': 'B04',
    'pos': [2, 4],
    'contents': null
  },
  {
    'cell': 'B05',
    'pos': [2, 5],
    'contents': null
  },
  {
    'cell': 'B06',
    'pos': [2, 6],
    'contents': null
  },
  {
    'cell': 'B07',
    'pos': [2, 7],
    'contents': null
  },
  {
    'cell': 'B08',
    'pos': [2, 8],
    'contents': null
  },
  {
    'cell': 'C01',
    'pos': [3, 1],
    'contents': bishop
  },
  {
    'cell': 'C02',
    'pos': [3, 2],
    'contents': pawn
  },
  {
    'cell': 'C03',
    'pos': [3, 3],
    'contents': null
  },
  {
    'cell': 'C04',
    'pos': [3, 4],
    'contents': null
  },
  {
    'cell': 'C05',
    'pos': [3, 5],
    'contents': null
  },
  {
    'cell': 'C06',
    'pos': [3, 6],
    'contents': null
  },
  {
    'cell': 'C07',
    'pos': [3, 7],
    'contents': null
  },
  {
    'cell': 'C08',
    'pos': [3, 8],
    'contents': null
  },
  {
    'cell': 'D01',
    'pos': [4, 1],
    'contents': king
  },
  {
    'cell': 'D02',
    'pos': [4, 2],
    'contents': pawn
  },
  {
    'cell': 'D03',
    'pos': [4, 3],
    'contents': null
  },
  {
    'cell': 'D04',
    'pos': [4, 4],
    'contents': null
  },
  {
    'cell': 'D05',
    'pos': [4, 5],
    'contents': null
  },
  {
    'cell': 'D06',
    'pos': [4, 6],
    'contents': null
  },
  {
    'cell': 'D07',
    'pos': [4, 7],
    'contents': null
  },
  {
    'cell': 'D08',
    'pos': [4, 8],
    'contents': null
  },
  {
    'cell': 'E01',
    'pos': [5, 1],
    'contents': queen
  },
  {
    'cell': 'E02',
    'pos': [5, 2],
    'contents': pawn
  },
  {
    'cell': 'E03',
    'pos': [5, 3],
    'contents': null
  },
  {
    'cell': 'E04',
    'pos': [5, 4],
    'contents': null
  },
  {
    'cell': 'E05',
    'pos': [5, 5],
    'contents': null
  },
  {
    'cell': 'E06',
    'pos': [5, 6],
    'contents': null
  },
  {
    'cell': 'E07',
    'pos': [5, 7],
    'contents': null
  },
  {
    'cell': 'E08',
    'pos': [5, 8],
    'contents': null
  },
  {
    'cell': 'F01',
    'pos': [6, 1],
    'contents': bishop
  },
  {
    'cell': 'F02',
    'pos': [6, 2],
    'contents': pawn
  },
  {
    'cell': 'F03',
    'pos': [6, 3],
    'contents': null
  },
  {
    'cell': 'F04',
    'pos': [6, 4],
    'contents': null
  },
  {
    'cell': 'F05',
    'pos': [6, 5],
    'contents': null
  },
  {
    'cell': 'F06',
    'pos': [6, 6],
    'contents': null
  },
  {
    'cell': 'F07',
    'pos': [6, 7],
    'contents': null
  },
  {
    'cell': 'F08',
    'pos': [6, 8],
    'contents': null
  },
  {
    'cell': 'G01',
    'pos': [7, 1],
    'contents': knight
  },
  {
    'cell': 'G02',
    'pos': [7, 2],
    'contents': pawn
  },
  {
    'cell': 'G03',
    'pos': [7, 3],
    'contents': null
  },
  {
    'cell': 'G04',
    'pos': [7, 4],
    'contents': null
  },
  {
    'cell': 'G05',
    'pos': [7, 5],
    'contents': null
  },
  {
    'cell': 'G06',
    'pos': [7, 6],
    'contents': null
  },
  {
    'cell': 'G07',
    'pos': [7, 7],
    'contents': null
  },
  {
    'cell': 'G08',
    'pos': [7, 8],
    'contents': null
  },
  {
    'cell': 'H01',
    'pos': [8, 1],
    'contents': rook
  },
  {
    'cell': 'H02',
    'pos': [8, 2],
    'contents': pawn
  },
  {
    'cell': 'H03',
    'pos': [8, 3],
    'contents': null
  },
  {
    'cell': 'H04',
    'pos': [8, 4],
    'contents': null
  },
  {
    'cell': 'H05',
    'pos': [8, 5],
    'contents': null
  },
  {
    'cell': 'H06',
    'pos': [8, 6],
    'contents': null
  },
  {
    'cell': 'H07',
    'pos': [8, 7],
    'contents': null
  },
  {
    'cell': 'H08',
    'pos': [8, 8],
    'contents': null
  },
]



function cellClicked(clicked) {
  var cellClicked = clicked.id;
  console.log(fetchCell(cellClicked));
  if (!highlighted) {
    if (fetchCell(cellClicked) != null) {
      highlighted = grid.find(x => x.cell == cellClicked);
      moves = highlighted.contents.canMove(highlighted);
      moves.forEach(function (x) {
        $("#" + x.cell).addClass('highlightedCell')
      });
      if (moves.length < 1)
        highlighted = null;
    }
  } else {

    if (moves.find(x => x.cell === cellClicked)) {
      $("#" + highlighted.cell).text("");

      grid.find(x => x.cell === cellClicked).contents = highlighted.contents;
      $("#" + cellClicked).text(highlighted.contents.name);
      highlighted.contents = null;
    }

    moves.forEach(function (x) {
      $("#" + x.cell).removeClass('highlightedCell')
    });
    moves = [];
    highlighted = null;
  }
}

function movePiece() {

}

function fetchCell(cell) {
  var thisCell = grid.find(x => x.cell === cell);
  return thisCell.contents;
}

function placePiece(where, image) {
  var test = where + " .nullCell";
  var pieceToDisplay = $("<img class = 'piece' onnext='piecenexted()'>");
  pieceToDisplay.attr('src', image);
  $(test).remove();
  $(where).append(pieceToDisplay);
}

var highlighted = null;
var moves = [];

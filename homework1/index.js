const structure = require('./db/tree.json');

function print(data, depth) {
  if (depth == 0) {
    console.log(data.name);
  } else if (depth === 1) {
    console.log('├──' + data.name);
  } else {
    console.log('│' + ' '.repeat(depth - 1) + '└──' + data.name);
  }
}

function showTree(struct, depth = 0) {
  print(struct, depth);

  if (struct.items) {
    const currentDepth = depth + 1;
    for (const item of struct.items) {
      showTree(item, currentDepth);
    }
  }
}

showTree(structure);
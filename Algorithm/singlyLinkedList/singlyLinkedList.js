// const readline = require('readline');

// const rl = readline.createInterface({
//   input: process.stdin,
//   output: process.stdout
// });
// rl.on('line', function(answer) {
// 	console.log(answer);
// 	rl.close();
// });

let list = [];

// const Node = (value) => {
//   let node = {}
//   node.value = value;
//   node.next = null;
//   return node
// }

const addNode = (value) => {
  list.push(Node(value))
  list.sort(function (a, b) {
    return a.value < b.value ? -1 : a.value > b.value ? 1 : 0;
  });
  console.log(list)
}

const deleteNode = (value) => {
  if (list.length !== 0) {
    const isExist = function (node) {
      return node.value !== value;
    }
    list = list.filter(isExist);
    console.log(list)
  } else {
    console.log("삭제 할 노드가 없습니다.")
  }
}

const singlyLinkedList = () => {
  let behavior
  while (behavior !== "중지") {
    behavior = prompt("동작을 입력해주세요")
    switch (behavior) {
      case ("생성"):
        let addValue = prompt("값을 입력해주세요")
        addNode(addValue)
        break;
      case ("삭제"):
        let deleteValue = prompt("삭제값을 입력하세요")
        deleteNode(deleteValue)
        break;
      default:
        break;
    }
  }
}

singlyLinkedList();
console.log(list)



  const Node = (value) => {
    this.value = value;
    this.next = null;
  }

// const singlyLinkedList = () => {
//   let list = {};
//   list.head = null;
//   list.tail = null;

//   list.addNode = (value) => {
//     if (list.head == null) {
//       list.head = Node(value);
//     } else {
//       let tailNode = list.tail;
//       tailNode.next = Node(value);
//       list.tail = tailNode.next
//     }
//     list.addNode(2);
//     list.addNode(4);
//     console.log(`list : ${list}`)
//     return list;
//   }
// }

// singlyLinkedList();
// console.log('a')
function Node(value) {
  this.value = value;
  this.next = null;
}

function LinkedList() {
  this._length = 0;
  this._head = null;
}

LinkedList.prototype.addNode = function (value) {
  let node = new Node(value);
  let pointer = this._head;

  if (this._head == null) {
    this._head = node;
    this._length++;
  } else if (this.circuit(node) == 0) {
    this._head = node;
    this._head.next = pointer;
    this._length++;
    this.sort();
  }
};

LinkedList.prototype.circuit = function (node) {
  let pointer = this._head;

  while (true) {
    if (pointer.value == node.value) {
      console.log("중복 값이 있습니다.");
      return 1;
    }
    if (pointer.next == null) break;
    pointer = pointer.next;
  }
  return 0;
};

LinkedList.prototype.sort = function () {
  let before = null;
  let pointer = this._head;

  for (let i = 0; i < this._length; i++) {
    if (pointer.next != null) {
      if (pointer.value > pointer.next.value) {
        if (before == null) {
          before = pointer.next;
          this._head = pointer.next;
          pointer.next = this._head.next;
          this._head.next = pointer;
        } else {
          before = pointer.next;
          before.next = pointer.next;
          pointer.next = pointer.next.next;
        }
      }
    }
  }
};

const singlyLinkedList = () => {
  var list = new LinkedList();
  let commend;
  while (commend !== "중지") {
    commend = prompt("삽입, 삭제, 중지 중 하나를 입력하세요");
    switch (commend) {
      case "삽입":
        let addValue = prompt("값을 입력하세요");
        list.addNode(addValue);
        console.log(list);
        break;
      case "삭제":
        break;
      default:
        break;
    }
  }
  console.log(list);
};

singlyLinkedList();

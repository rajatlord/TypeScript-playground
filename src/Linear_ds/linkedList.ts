class ListNode {
  public data: number;
  public next: ListNode | null;

  constructor(data: number) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
  public head: ListNode | null;

  constructor(head: ListNode) {
    this.head = head;
  }

  public print(): void {
    let temp = this.head;

    while (temp !== null) {
      console.log(temp.data);
      temp = temp.next;
    }
  }

  public length():number{
    let temp = this.head;
    let size = 0;
    while(temp != null){
        // why to increment size before execuation 
        size++;
        temp = temp.next;
    }
    return size;
  }
}

let nodeOne = new ListNode(5);
let nodeTwo = new ListNode(15);
let nodeThree = new ListNode(25);

nodeOne.next = nodeTwo;
nodeTwo.next = nodeThree;

let linkedList = new LinkedList(nodeOne);
console.log(linkedList);
console.log(linkedList.length());
// linkedList.print();

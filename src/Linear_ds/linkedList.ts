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

  public pushNode(data:number):void{
    if(this.head === null){
      this.head = new ListNode(data);
    }else{
      let temp = this.head;
      while(temp.next !== null){
        temp = temp.next;
      }
      temp.next = new ListNode(data);
    }
  }

  // for inserting node head
  public insertHead(data:number):void{
    let node = new ListNode(data);
    let temp = this.head;
    this.head = node;
    this.head.next = temp;
  }

  // finding in the linkedlist
  public find(value:number):boolean{
    let temp = this.head;
    while(temp!==null){
      if(temp.data === value){
        return true;
      }
      temp = temp.next;
    }
    return false;
  }
}

let nodeOne = new ListNode(5);
let nodeTwo = new ListNode(15);
let nodeThree = new ListNode(25);

nodeOne.next = nodeTwo;
nodeTwo.next = nodeThree;
// let nodeFour = new ListNode(30);
let linkedList = new LinkedList(nodeOne);
linkedList.pushNode(30)

// inserting head
linkedList.insertHead(38);

console.log(linkedList);
console.log(linkedList.length());
console.log("is 38 in the list? ",linkedList.find(38));
// linkedList.print();

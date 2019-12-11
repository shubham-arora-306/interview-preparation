class node {
    constructor(value){
      this.value = value;
      this.next = null
    }
  }
  
  var list = new node(1);
  list.next = new node(2);
  list.next.next = new node(3);
  list.next.next.next = new node(4);
  list.next.next.next.next = new node(5);
  
  
  function rotate(head, n){
    // creating reference for rotating
    var tail = head;
    var length = 1; 
    // for measuring length of linked list
    while(tail.next){
      tail = tail.next;
      length++;
      // console.log(length)
    }
    tail.next = head
    // to minimize overall rotation redundancy
    var count = length - (n%length);
    while (count>0){
      head = head.next;
      // console.log(head)
      tail = tail.next;
      count--
    }
    tail.next = null
    return head
}

console.log(rotate(list,2))
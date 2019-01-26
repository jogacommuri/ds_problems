class Node {
    constructor(val) {
        this.val = val;
        this.next = null;
    }
}

/**
 * Initialize your data structure here.
 */
var MyLinkedList = function(val) {
    this.head = null;
    this.tail = null;
    this.size = 0;
};

/**
 * Get the value of the index-th node in the linked list. If the index is invalid, return -1. 
 * @param {number} index
 * @return {number}
 */
MyLinkedList.prototype.get = function(index) {
    if(index < 0 || index >= this.size){
        return -1;
    }
    let curr = this.head;
    for(let i = 0; i < index ; i++){
        curr = curr.next;
    }

    return curr.val;
};

/**
 * Add a node of value val before the first element of the linked list. After the insertion, the new node will be the first node of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtHead = function(val) {
    const newNode = new Node(val);
    let curr = this.head;
    this.head = newNode;
    this.head.next = curr;
    this.size++;

    // let cur = this.head;
    // this.head = new Node(val);
    // this.head.next = cur;
    // this.size++;
};

/**
 * Append a node of value val to the last element of the linked list. 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtTail = function(val) {
    let curr = this.head;
    while(curr.next){
        curr = curr.next;
    }
    let newNode = new Node(val);
    if(!curr){
        this.head = newNode;
    }else{
        curr.next = newNode;
    }
    this.size++;
};

/**
 * Add a node of value val before the index-th node in the linked list. If index equals to the length of linked list, the node will be appended to the end of linked list. If index is greater than the length, the node will not be inserted. 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
MyLinkedList.prototype.addAtIndex = function(index, val) {
    
    if(index < 0){
        return;
    }
    if(index === 0 ){
        this.addAtHead(val);
        return;
    }

    let curr = this.head;
    for(let i=0; i < index-1; i++){
        curr = curr.next;
    }
    if(!curr){return}

    let newNode = new Node(val);

    let next = curr.next;
    curr.next = newNode;
    curr.next.next = next;

    this.size++;
};

/**
 * Delete the index-th node in the linked list, if the index is valid. 
 * @param {number} index
 * @return {void}
 */
MyLinkedList.prototype.deleteAtIndex = function(index) {
    if (index < 0 || index >= this.size) {
        return;
    }

    this.size--;

    if (index === 0) {
        this.head = this.head.next;
        return;
    }

    let cur = this.head;
    for (let i=0; i < index-1; i++) {
        cur = cur.next;
    }

    cur.next = cur.next.next;
};
    /*
    * Deletes a node
    * @param {*} node - the node to remove
    * @return {*} value - the deleted node's value
    */
   MyLinkedList.prototype.remove = function(val) {
        if(!this.head){
            return null;
        }
        let deleteNode  = null;
        // If the head must be deleted then make next node that is differ
        // from the head to be a new head.
        while(this.head && this.head.val === val){
            deleteNode =this.head;
            this.head = this.head.next;
        }

        let curr = this.head;
        if (curr !== null) {
            while(curr.next){
                // If next node must be deleted then make next node to be a next next one.
                if(curr.next.val === val){
                    deleteNode = curr.next;
                    curr.next = curr.next.next;
                }else{
                    curr = curr.next;
                }
            }
        }
        // Check if tail must be deleted.
        // if(this.tail.val === val){
        //     this.tail = curr;
        // }

        return deleteNode;
        
    }
    /*
    * Searches the linked list and returns true if it contains the value passed
    * @param {*} value - the value to search for
    * @return {boolean} - true if value is found, otherwise false
    */
    MyLinkedList.prototype.contains = function (val){
        let curr = this.head;
        while(curr.val != val){
            curr = curr.next;
        }
        return curr.val === val;
    }



/** 
 * Your MyLinkedList object will be instantiated and called as such:
 *  */
var obj = new MyLinkedList;

obj.addAtHead(1)
obj.addAtTail(5)
obj.addAtIndex(1,2)
//obj.deleteAtIndex(1)
console.log(obj);
obj.remove(2);
console.log(obj);
console.log(obj.contains(5));
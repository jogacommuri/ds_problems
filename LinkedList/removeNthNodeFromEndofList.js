/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
//Method 1 (Use length of linked list)
// 1) Calculate the length of Linked List. Let the length be len.
// 2) Print the (len – n + 1)th node from the begining of the Linked List.
var removeNthFromEnd = function(head, n) {
    let len = 0;
    let curr = head;
    while(curr){
        len++;
        curr = curr.next;
    }
    let delNode = head
    for(let i=0;i< len-n-1;i++){
        delNode = delNode.next;
    }
    delNode.next = delNode.next.next;
    
    return head
};


// Method 2 (Use two pointers) 
// Maintain two pointers – reference pointer and main pointer. 
//Initialize both reference and main pointers to head. 
//First move reference pointer to n nodes from head. 
//Now move both pointers one by one until reference pointer reaches end. 
//Now main pointer will point to nth node from the end. Return main pointer.

var removeNthFromEnd = function(head, n) {
    let fastPtr = head, slowPtr = head;
    let dist = 0;

    while(dist < n){
        fastPtr = fastPtr.next;
        dist++;
    }

    if(!fastPtr) return slowPtr.next;

    while(fastPtr.next){
        fastPtr = fastPtr.next;
        slowPtr = slowPtr.next;
    }
    slowPtr.next = slowPtr.next.next;

    return  head;
};



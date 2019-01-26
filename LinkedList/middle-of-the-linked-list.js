/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var middleNode = function(head) {
    let A = [head];

    while(A[A.length - 1].next != null){
        A.push(A[A.length - 1].next);
    }

    return A[Math.trunc(A.length/2)];
};

//When traversing the list with a pointer slow, make another pointer fast that traverses twice as fast. 
//When fast reaches the end of the list, slow must be in the middle.

var middleNode = function(head) {
    if(!head || !head.next){
        return head;
    }
    let fast = head, slow = head;

    while(fast && fast.next){
        slow = slow.next;
        fast = fast.next.next;
    }

    return slow;
}
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
var reverseList = function(head) {
    if(head === null || head.next === null) return head;

    let next = head.next;
    head.next = null;

    while(head!= null && next != null){
        let tmp = next.next;
        next.next = head;
        head = next;
        next = tmp;
    }
    return head;
};

var reverseList = function(head) {
    let curr = head;
    let prev = null;
    let next = null;

    while(curr != null){
        next = curr.next;
        curr.next = prev;
        prev = curr;
        curr = next;
    }

    head = prev;
    return head;
}

//recursive
var reverseList = function(head) {
    if(head === null || head.next === null) return head;
    let next = head.next;
    head.next = null;

    let nextReversalList = reverseList(next);
    next.next = head;
    // now headNext is the last node of the reversed List on the right of head!!!
    return nextReversalList;
}
var reverseList = function(head) {
    return recursiveApproach(head, null);
}
function recursiveApproach(node, prev){
    if(!node) return null;

    let head = recursiveApproach(node.next, node) || node;
    node.next = prev;

    return head;
}



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
var detectCycle = function(head) {
    if(!head) return null;
    let slowPtr = head;
    let fastPtr = head;

    while(fastPtr && fastPtr.next){
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next.next;
        if(fastPtr === slowPtr) break;

    }
    // check if the list has no cycle
    if(fastPtr == null || fastPtr.next == null){
        return null;
    }
    // find the entrance of the cycle
    slowPtr = head;
    while(slowPtr != fastPtr){
        slowPtr = slowPtr.next;
        fastPtr = fastPtr.next;
    }

    return slowPtr;
};
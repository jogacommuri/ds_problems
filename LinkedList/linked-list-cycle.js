/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if(!this.head) return false;
    let fastPtr = head;
    let slowPtr = head;
    
    
    while(fastPtr && fastPtr.next){
        fastPtr = fastPtr.next.next;
        slowPtr = slowPtr.next;
        if(fastPtr === slowPtr) return true;
    }
    
    return false;
};

    
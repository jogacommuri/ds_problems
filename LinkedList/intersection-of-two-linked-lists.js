/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

 //solution 1
var getIntersectionNode = function(headA, headB) {
   if(!headA || !headB) return null;

   let ptr1 = headA;
   let ptr2 = headB;

   while(ptr1 && ptr2 && ptr1 !== ptr2){
       ptr1 = ptr1.next;
       ptr2 = ptr2.next;

       if(ptr1 === ptr2 ) return ptr1;
       if(!ptr1) ptr1 = headB;
       if(!ptr2) ptr2 = headA; 
   }
   return ptr1;
};

//solution 2
const getIntersectionNode = function(headA, headB) {
    let lenA = getLength(headA);
    let lenB = getLength(headB);
    while(lenA < lenB){
        headB = headB.next;
        lenB--;
    }
    while(lenB < lenA){
        headA = headA.next;
        lenA--;
    }
    while(headA != headB){
        headA = headA.next;
        headB = headB.next;
    }

    return headA;
}
const getLength = function(listhead){
    let length = 0;
    while(listhead){
        length++;
        listhead = listhead.next;
    }
    return length;
};
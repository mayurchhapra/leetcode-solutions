/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  // Check for empty lists
  if (!list1) {
      return list2;
  }
  if (!list2) {
      return list1;
  }

  // Initialize a dummy node to simplify the code
  let dummy = new ListNode(-1);
  let current = dummy;

  // Merge the two lists
  while (list1 && list2) {
      if (list1.val < list2.val) {
          current.next = list1;
          list1 = list1.next;
      } else {
          current.next = list2;
          list2 = list2.next;
      }
      current = current.next;
  }

  // If one of the lists is not yet exhausted, append the remaining elements
  if (list1) {
      current.next = list1;
  } else {
      current.next = list2;
  }

  // Return the merged list (excluding the dummy node)
  return dummy.next;
};
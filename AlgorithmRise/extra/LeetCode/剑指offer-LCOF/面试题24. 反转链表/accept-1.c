/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */


struct ListNode* traverse(struct ListNode* pre, struct ListNode* p){

    struct ListNode* head = NULL;
    
    if(!p){
        return pre;
    }

    head = traverse(p, p->next);
    p -> next = pre;

    return head;
}

struct ListNode* reverseList(struct ListNode* head){

    return traverse(NULL, head);
}
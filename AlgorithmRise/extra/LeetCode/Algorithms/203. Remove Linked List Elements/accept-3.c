/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */


struct ListNode* removeElements(struct ListNode* head, int val){

    struct ListNode* p = head;
    struct ListNode* pre = NULL;

    while(p && val == p->val){
        p = p->next;
    }
    head = p;

    while(p){

        if(pre){
            pre->next = val != p->val ? p : NULL;
        }

        if(val != p->val){
            pre = p;
        }
        
        p = p->next;
    }

    return head;
}
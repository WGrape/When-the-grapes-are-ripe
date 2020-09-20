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

        if(val != p->val){

            if(pre){
                pre->next = p;
            }
            pre = p;
        }else{
            if(pre){
                pre->next = NULL;
            }
        }

        p = p->next;
    }

    return head;
}
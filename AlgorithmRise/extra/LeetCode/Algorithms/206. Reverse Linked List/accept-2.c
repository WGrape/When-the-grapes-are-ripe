/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* reverseList(struct ListNode* head){

    struct ListNode* p = head;
    struct ListNode* pre = NULL;
    struct ListNode* next = NULL;
    while(p){

        next = p->next;
        if(!next){
            head = p;
        }

        p->next = pre;
        pre = p;
        p = next;
    }
    
    return head;
}
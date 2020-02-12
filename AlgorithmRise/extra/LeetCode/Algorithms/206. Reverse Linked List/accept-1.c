/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */

struct ListNode* reverse(struct ListNode* p, struct ListNode* pre){
    struct ListNode* head = NULL;
    if(NULL != p){

        head = reverse(p->next, p);
        p->next = pre;
    }else{

        return pre;
    }
    return head;
}

struct ListNode* reverseList(struct ListNode* head){
    return reverse(head, NULL);
}
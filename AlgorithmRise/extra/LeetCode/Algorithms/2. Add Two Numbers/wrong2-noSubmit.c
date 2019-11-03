/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2) {
 
    struct ListNode* p = (struct ListNode*)malloc(sizeof(struct ListNode)*1);
    
    if(l1->next!=NULL && l2->next!=NULL){
        
        p->next = addTwoNumbers(l1->next,l2->next);
    }else{
        
        p->val = (l1->val+l2->val)%10;
    
        if(l1->val+l2->val>9){

            struct ListNode* overflow = (struct ListNode*)malloc(sizeof(struct ListNode)*1);
            overflow->val=1;
            overflow->next=NULL;
            p->next=overflow;
        }
        return p;
    }
    
    if(l1->val+l2->val>9){
        
        p->next->val=(p->next->val+1)%10;
    }
    p->val = (l1->val+l2->val)%10;
    
    return p;
}
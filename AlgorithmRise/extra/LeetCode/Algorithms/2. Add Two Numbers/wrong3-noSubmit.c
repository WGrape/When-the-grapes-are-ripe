// 这个错是因为，我以为两个数组是等长的，谁知道是可以为不等长的。

/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2) {
 
    struct ListNode* p = (struct ListNode*)malloc(sizeof(struct ListNode)*1);
    p->next=NULL; // 必须加这个，不然报member access within misaligned address错误
    
    if(l1==NULL&l2==NULL){

        p->val = (l1->val+l2->val)%10;
    
        if(l1->val+l2->val>9){

            struct ListNode* overflow = (struct ListNode*)malloc(sizeof(struct ListNode)*1);
            overflow->val=1;
            overflow->next=NULL;
            p->next=overflow;
        }
        return p;
    }else{
        
        if(l1!=NULL&&l2==NULL){

            addTwoNumbers(l1->next,l2);
        }else if(l1!=NULL&&l2!=NULL){

            addTwoNumbers(l1->next,l2);
        }
    }
    
    if(l1->val+l2->val>9){
        (p->next->val)+=1;
    }
    
    p->val=(l1->val+l2->val)%10;
    
    return p;
}
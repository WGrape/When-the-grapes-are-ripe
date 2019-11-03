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
    
    
    int val_1=(l1==NULL)?0:l1->val;
    int val_2=(l2==NULL)?0:l2->val;
    
    if(l1!=NULL || l2!=NULL){
        
        p->next = addTwoNumbers( (l1==NULL)?NULL:l1->next, (l2==NULL)?NULL:l2->next );
    }else if(l1==NULL&&l2==NULL){
        
        return NULL;
    }else{
        
        p->val = (val_1+val_2)%10;
    
        if(val_1+val_2>9){

            struct ListNode* overflow = (struct ListNode*)malloc(sizeof(struct ListNode)*1);
            overflow->val=1;
            overflow->next=NULL;
            p->next=overflow;
        }
        return p;
    }
    
    if(val_1+val_2>9){
        
        struct ListNode *pr=p;
        pr->val=val_1+val_2;
        while(pr!=NULL&&pr->val>9){
            
            pr->val = (pr->val)%10;
            if(pr->next!=NULL){
                
                pr->next->val= (pr->next->val)+1;
            }else{
                
                struct ListNode* overflow = (struct ListNode*)malloc(sizeof(struct ListNode)*1);
                overflow->val=1;
                overflow->next=NULL;
                pr->next=overflow;
            }
            pr=pr->next;
        }
        
    }
    
    p->val=(val_1+val_2)%10;
    
    return p;
}
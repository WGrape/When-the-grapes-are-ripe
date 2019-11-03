// 我理解错题目的意思了，不过我没提交，只是觉得能想出这样写还是很不容易的
// 测试用例如下
// Your Input : [2,4,3,1,4,5]
//              [5,6,4,7,8,6]

// Output : [7,1,0,7,8,1,2,1,1]

// Excepted : [7,0,8,8,2,2,1]


/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2) {
    
    struct ListNode* return_p = NULL;
    struct ListNode *p = (struct ListNode*)malloc(sizeof(struct ListNode)*1);
    
    if( l1->next != NULL && l2->next!= NULL){
        
        return_p = addTwoNumbers(l1->next,l2->next);
    }else{
          
        
        if(l1->val+l2->val>9){
            
            p->val=(l1->val+l2->val)%10;
            p->next=NULL;
            
            // 新建一个结点
            struct ListNode *overflow = (struct ListNode*)malloc(sizeof(struct ListNode)*1);
            
            overflow -> val = 1;
            overflow -> next = p;
            return overflow;
            
        }else{

            p->val=l1->val+l2->val;
            p->next = NULL;
            return p;   
        }
    }

    if(l1->val+l2->val>9){

        p->val=(l1->val+l2->val)%10;
        p->next=return_p;
        
        // 新建一个结点
        struct ListNode *overflow = (struct ListNode*)malloc(sizeof(struct ListNode)*1);

        overflow -> val = 1;
        overflow -> next = p;
        return overflow;

    }else{

        p->val=l1->val+l2->val;
        p->next = return_p;
        return p;   
    }

}
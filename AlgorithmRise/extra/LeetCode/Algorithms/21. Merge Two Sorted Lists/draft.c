/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */


struct ListNode* mergeTwoLists(struct ListNode* l1, struct ListNode* l2){

    struct ListNode* __l1 = l1;
    struct ListNode* pre = NULL;

    while( l1 || l2 ){

        if(!l1){
            break;
        }else if(!l2){
            break;
        }

        int v1 = l1 -> val;
        int v2 = l2 -> val;

        if( v2 < v1 ){

            if(!pre){
                pre = l2;
                l2 = l2 -> next;
                continue;
            }else{
                pre -> next = l2;
                pre = l2;
                l2 = l2 -> next;
            }

        }else if( v2 == v1 ){

            struct ListNode* _l2 = l2 -> next;
            struct ListNode* _l1 = l1 -> next; 

            if(pre){
                pre -> next = l2;
            }else{
                l1 -> next = l2;
            }
            
            l2 -> next = l1;

            pre = l2;

            l1 = _l1;
            l2 = _l2;
        }else{
            
            if(!pre){
                pre = l1;
                l1 = l1 -> next;
                continue;
            }else{
                pre -> next = l1;
                pre = l1;
                l1 = l1 -> next;
            }
        }
    }

    return __l1;
}
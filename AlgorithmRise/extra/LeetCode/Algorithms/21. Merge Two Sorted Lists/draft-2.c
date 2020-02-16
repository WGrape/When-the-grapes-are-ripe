/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* mergeTwoLists(struct ListNode* l1, struct ListNode* l2){
    
    struct ListNode* head = l1;
    struct ListNode* pre = NULL;

    if(l1->val == l2->val){
        l1 -> next = l2;
        pre = l2;
        l2 = l2->next;
        l1 = l1->next;
    }else if(l1->val > l2->val){
        pre = l2;
        l2 = l2->next;
    }else{
        pre = l1;
        l1 = l1->next;
    }

    while( l1 || l2 ){

        if( !l1 || !l2 ){
            pre -> next = ( !l1 ) ? l2 : l1;
            break;
        }

        int v1 = l1 -> val;
        int v2 = l2 -> val;

        if( v1 == v2 ){

            pre -> next = l1;
            l1 -> next = l2;
            pre = l2;
            l1 = l1->next;
            l2 = l2->next;
        }else if( v1 > v2 ){

            pre -> next = l2;
            pre = l2;
            l2 = l2->next;
        }else{

            pre -> next = l1;
            pre = l1;
            l1 = l1->next;
        }
    }

    return head;
}
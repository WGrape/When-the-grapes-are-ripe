/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
void deleteNode(struct ListNode* node) {
    
    struct ListNode* p = head;
    struct ListNode* pre = NULL;

    while(p){

        if( node->val == p->val ){

            if(NULL = pre){
                head = p->next;
            }else{
                pre->next = p->next;
            }
            free(p);
            break;
        }

        pre = p;
        p = p->next;
    }
}
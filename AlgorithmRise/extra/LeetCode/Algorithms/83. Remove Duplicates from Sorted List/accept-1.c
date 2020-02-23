/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */


struct ListNode* deleteDuplicates(struct ListNode* head){

    struct ListNode* p = head;
    struct ListNode* pre = NULL;
    int pre_val;
    while(p){
        if(!pre){
            pre_val = p->val;
            pre = p;
            p = p->next;
            continue;
        }

        struct ListNode* _p = p;
        while(_p && pre_val == _p->val){
            _p = _p->next;
        }

        pre->next = _p;
        pre = _p;
        if(!_p){

            break;
        }else{
            
            pre_val = _p->val;
            p = _p->next;
        }
    }

    return head;
}
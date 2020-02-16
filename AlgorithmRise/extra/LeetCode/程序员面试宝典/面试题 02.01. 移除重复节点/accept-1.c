/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */


struct ListNode* removeDuplicateNodes(struct ListNode* head){

    int visit[20005] = {0};
    struct ListNode* p = head;
    struct ListNode* pre = NULL;
    
    while(p){

        if(visit[ p->val ]){
            p = p->next;
            continue;
        }

        visit[ p->val ] = 1;
        if(!pre){
            pre = p;
        }else{
            pre->next = p;
            pre = p;
        }

         p = p->next;
    }
    if(pre){
        pre->next = NULL;
    }

    return head;
}
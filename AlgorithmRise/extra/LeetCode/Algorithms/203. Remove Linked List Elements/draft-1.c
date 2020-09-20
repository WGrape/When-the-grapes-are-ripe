/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */


struct ListNode* removeElements(struct ListNode* head, int val){

    struct ListNode* p = head;
    struct ListNode* pre = NULL;

    // 先找到起始节点
    while(p && val == p->val){
        p = p->next;
        pre = p;
    }
    head = p;

    // 删除节点
    while(p){

        if(val != p->val){

            if(pre){
                pre->next = p;
            }else{
                pre = p;
            }
        }
        p = p->next;
    }

    return head;
}


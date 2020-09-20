/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */

int traverseLink(struct ListNode* pre, struct ListNode* p, int n){

    if(!p){
        return 0;
    }

    int th = 1 + traverseLink(p, p->next, n);

    if(n == th){
        pre->next = p->next;
    }

    return th;
}

struct ListNode* removeNthFromEnd(struct ListNode* head, int n){

    if(!head){
        return head;
    }

    if(!head->next){
        if(1 == n){
            head = NULL;
        }
        return head;
    }
    
    int th = traverseLink(head, head->next, n);
    if(n == th+1){
        head = head->next;
    }

    return head;
}
/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */

struct ListNode* _g = NULL;

int traverseList(struct ListNode* p, int k){

    if( !p ){
        return 0;
    }

    int n = traverseList( p->next, k );

    if( n == k-1 ){
        _g = p;
    }

    return n+1;
}

struct ListNode* getKthFromEnd(struct ListNode* head, int k){

    _g = NULL;

    traverseList(head, k);

    return _g;
}
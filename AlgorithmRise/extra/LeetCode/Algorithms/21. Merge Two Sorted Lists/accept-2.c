/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
struct ListNode* mergeTwoLists(struct ListNode* l1, struct ListNode* l2){
    
    struct ListNode* head = NULL;
    struct ListNode* pre = NULL;

    if(!l1 || !l2){
        return l1 ? l1 : l2;
    }
    else if(l1->val > l2->val){
        head = l2;
        pre = l2;
        l2 = l2->next;
    }else{
        head = l1;
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

        if( v1 > v2 ){

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

// 方法: 之前代码还有 == 的判断, 但是这段代码一直逻辑不通, 后来就发现这个逻辑完全是多余的, 可以用 ( >= 或者 <= 代替 )
// 思考: 一段代码逻辑是否已经在其他逻辑中存在了呢 ？
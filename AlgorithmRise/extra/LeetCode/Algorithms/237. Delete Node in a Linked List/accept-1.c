/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     struct ListNode *next;
 * };
 */
void deleteNode(struct ListNode* node) {

    struct ListNode* temp = node -> next;
    node -> val = node -> next -> val;
    node -> next = node -> next -> next;
    free(temp);
}

// 为什么没有 head 指针呢 ？为什么只给一个 node 指针呢 ？
// 常见的删除节点操作不是从 head 开始遍历 ，然后操作 pre 指针吗

// 困惑了好久，和评论区的人一样，为什么只有一个 node 参数呢 ？
// 终于，我明白了，原来这题的意义就是让我们抛弃固有的遍历思维，
// 用这种新奇的思路 去 解决，去实现节点的删除
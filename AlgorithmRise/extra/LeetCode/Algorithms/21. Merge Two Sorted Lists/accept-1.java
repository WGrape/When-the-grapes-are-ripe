/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode mergeTwoLists(ListNode l1, ListNode l2) {
        
        int el_1, el_2, max,min;
        
        ListNode listNode = new ListNode(-1);
        listNode.next=null;
        
        ListNode p = listNode;
        
        while(l1!=null||l2!=null){
            
            
            if(l1!=null&l2!=null){
                
                if(l1.val>l2.val){
                    
                    ListNode node = new ListNode(l2.val);
                    p.next=node;
                    p=p.next;
                    
                    l2=l2.next;
                }else if(l1.val==l2.val){
                    
                    ListNode node1 = new ListNode(l1.val);
                    ListNode node2 = new ListNode(l2.val);
                    p.next=node1;
                    p.next.next=node2;
                    p=p.next.next;
                    
                    l2=l2.next;
                    l1=l1.next;
                }else{
                    
                    ListNode node = new ListNode(l1.val);
                    p.next=node;
                    p=p.next;
                    
                    l1=l1.next;
                }
                
            }else{
                
                ListNode node;
                if(l1==null){
                    
                    node=new ListNode(l2.val);
                    l2=l2.next;
                }else{
                    
                    node=new ListNode(l1.val);
                    l1=l1.next;
                }

                p.next = node;
                p = p.next;
            }
        
        }
        
        return listNode.next;
    }
}
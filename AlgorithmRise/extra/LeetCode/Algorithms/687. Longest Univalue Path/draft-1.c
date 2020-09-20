/**
 * Definition for a binary tree node.
 * struct TreeNode {
 *     int val;
 *     struct TreeNode *left;
 *     struct TreeNode *right;
 * };
 */
int max = -1;
void traverseTree(struct TreeNode* pre, struct TreeNode* p, bool is_continue, int path){

    if(!p){
        return;
    }

    if(!pre){

        is_continue = true;
    }else{

        if(pre->val != p->val){
            is_continue = false;
        }else{
            is_continue = true;
        }

        if(is_continue){
            ++path;
            max = path > max ? path : max;
        }
    }

    if(p->left){
        traverseTree(p, p->left, is_continue, path);
    }

    if(p->right){
        traverseTree(p, p->right, is_continue, path);
    }
}

int longestUnivaluePath(struct TreeNode* root){

    max = -1;
    traverseTree(NULL, root, true, 0);

    return max;
}
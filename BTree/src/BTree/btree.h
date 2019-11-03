#ifndef BTREE_BTREE_H
#define BTREE_BTREE_H

typedef struct BTreeNode BTreeNode;

struct BTreeNode {

    int *keys;  // An array of keys
    int t;      // Minimum degree (defines the range for number of keys)

    BTreeNode **C; // An array of child pointers

};

#endif

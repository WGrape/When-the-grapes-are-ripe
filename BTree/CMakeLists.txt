cmake_minimum_required(VERSION 3.1.0)
project(BTree)

file(GLOB_RECURSE source_list_bptree_c "./src/BPTree/*.c")
file(GLOB_RECURSE source_list_bptree_h "./src/BPTree/*.h")

file(GLOB_RECURSE source_list_btree_c "./src/BTree/*.c")
file(GLOB_RECURSE source_list_btree_h "./src/BTree/*.h")

add_executable(BTree src/main.c

        ${source_list_bptree_c}
        ${source_list_bptree_h}

        ${source_list_btree_c}
        ${source_list_btree_h}
)


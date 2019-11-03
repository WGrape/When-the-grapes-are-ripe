cmake_minimum_required(VERSION 3.10)
project(Data-Structures-And-Algorithms C)

set(CMAKE_C_STANDARD 99)

add_executable(
        Data-Structures-And-Algorithms
        Algorithms/Sorting/common.h
        Algorithms/Sorting/start.c
        Algorithms/Sorting/Bubble-Sort/Bubble-Sort.h
        Algorithms/Sorting/Bubble-Sort/Bubble-Sort-1.h
        Algorithms/Sorting/Selection-Sort/Selection-Sort.h
        Algorithms/Sorting/Insertion-Sort/Insertion-Sort.h Algorithms/Sorting/Counting-Sort/Counting-Sort.h Algorithms/Sorting/Radix-Sort/Radix-Sort.h)
#!/usr/bin/python
# -*- coding: UTF-8 -*-
# 参考 https://blog.csdn.net/qq_41940950/article/details/81942521

import sys
import sympy
import math
import mpmath
from sympy import *

sys.modules['sympy.mpmath'] = mpmath

# 定义f函数
# x = Symbol('x')
a, b, c, x, y, z = symbols('a,b,c,x,y,z')
f = (2 / 3) * x ** 2 + (1 / 3) * x ** 2 + x + x + 1
f.simplify()
print(f)

# expand表达式展开
f = (x + 1) ** 2
print(expand(f))

# solve方程自动求解
f1 = 2 * x - y + z - 10
f2 = 3 * x + 2 * y - z - 16
f3 = x + 6 * y - z - 28
print(solve([f1, f2, f3]))

# limit极限
f = (x + 1) ** 2 + 1
print(limit(f, x, a - 1))



# 2的3次方
print 2 ** 3  # x的y次幂
print 23 / 2  # Python2.x 里，整数除整数，只能得出整数。如果要得到小数部分，把其中一个数改成浮点数即可
print 23 / 2.0
print 23.4 // 2  # 向下取整

print math.sqrt(4)

print sympy.sqrt(4)

print(sympy.sqrt(8))

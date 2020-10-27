from operator import add, sub, mul, truediv

operators = {'+': add, '-': sub, '*': mul, '/': truediv}


def calculate(s):
    if s.isdigit():
        return float(s)
    for c in operators.keys():
        left, operator, right = s.partition(c)
        if operator in operators:
            return operators[operator](calculate(left), calculate(right))


eq = '3*2+2/2-1*2=5'
eq_left, eq_right = eq.split('=')
res = calculate(eq_left) == float(eq_right)
print(res)
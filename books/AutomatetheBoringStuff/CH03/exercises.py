def collatz(number):
    if number == 1:
        return
    elif number % 2 == 0:
        val = int(number/2)
        print(val)
        collatz(val)
    else:
        val = int(3*number+1)
        print(val)
        collatz(val)

numberInput = input("Enter number: ")
collatz(int(numberInput))

# less pure function

def collatz(number):
    if number % 2 == 0:
        val = int(number/2)
        print(val)
        return val
    else:
        val = int(3*number+1)
        print(val)
        return val

numberInput = input("Enter number: ")

while numberInput != 1:
    numberInput = collatz(int(numberInput))

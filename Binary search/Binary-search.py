def binary_search(list, item):
    low = 0
    high = len(list)-1

    while low<=high:
        mid = int((low+high)/2)
        guess = list[mid]
        if guess == item:
            return mid
        if guess > item:
            high = mid-1
        else:
            low = mid+1
    return None

my_list = [1,2,4,5,7,8,9,13,45,67,78,89]

print(binary_search(my_list,13))
print(binary_search(my_list,66))
def smallest_no(arr):
    smallest = arr[0]
    smallest_index = 0
    for i in range(1,len(arr)):
        if arr[i] < smallest:
            smallest = arr[i]
            smallest_index = i
    return smallest_index

def selection_sort(arr):
    newArr = []
    for i in range(len(arr)):
        smallest = smallest_no(arr)
        newArr.append(arr.pop(smallest))
    return newArr

print(selection_sort([34,354,2,45,23,56,21,5]))
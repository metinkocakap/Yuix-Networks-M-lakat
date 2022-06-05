def quick_sort(array):
    length = len(array)
    if length <= 1:
        return array
    else:
        temp = array.pop()

    items_hight = []
    items_lower = []

    for item in array:
        if item > temp:
            items_hight.append(item)

        else:
            items_lower.append(item)

    return quick_sort(items_lower) + [temp] + quick_sort(items_hight)

print(quick_sort([7, 103, 11, 5, 9, 58, 42]))
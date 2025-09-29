from typing import List
def min_max_num(nums : List[int]) :
  l = len(nums)
  min = float('inf')
  max = float('-inf')
  for i in range(l) :
    if nums[i] < min:
      min = nums[i]
    if nums[i] > max :
      max = nums[i]
  print('Minimum Number:', min)
  print('Maximum Number:', max)
  return


min_max_num([3,1,9,5])

    
# [3,1,9,5]
      
  
  
from typing import List
def can_plant_flowers(flowerbed:List[int], n: int):
   print(flowerbed)
   l = len(flowerbed)
   print('l:', l)
   if l == 1 :
     if flowerbed[0] == 0 :
       n = n - 1
       return n == 0
     else :
       return False
     
     
   
can_plant_flowers([1,0,0], 9)

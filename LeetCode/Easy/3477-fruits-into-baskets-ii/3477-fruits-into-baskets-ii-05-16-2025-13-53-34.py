class Solution:
    def numOfUnplacedFruits(self, fruits: List[int], baskets: List[int]) -> int:
       not_placed = 0

       for fruit in fruits:

           for i in range(len(baskets)):
               if fruit <= baskets[i]:
                    baskets[i] = -1
                    break
           else: 
                not_placed += 1
       return not_placed
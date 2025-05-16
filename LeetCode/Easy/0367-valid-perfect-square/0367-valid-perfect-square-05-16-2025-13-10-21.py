class Solution:
    def isPerfectSquare(self, num: int) -> bool:
        left, right = 0, num
        
        while left <= right:
            mid = (left + right) // 2
            sqrt = mid * mid
            if sqrt == num:
                return True
            elif sqrt < num:
                left = mid + 1
            else: 
                right = mid - 1
        
        return False
class Solution:
    def missingNumber(self, nums: List[int]) -> int:
        num_set = set(nums)

        for num in range(len(nums) + 1):
            if num not in num_set:
                return num
class Solution:
    def permute(self, nums: List[int]) -> List[List[int]]:
        permuations = []
        result = []
        chosen = [False] * len(nums)

        def backtracking():
            if len(permuations) == len(nums):
                result.append(permuations[:])
                return
                
            for i in range(len(nums)):
                if chosen[i]: continue
                permuations.append(nums[i])
                chosen[i] = True
                backtracking()
                permuations.pop()
                chosen[i] = False
        
        backtracking()
        return result
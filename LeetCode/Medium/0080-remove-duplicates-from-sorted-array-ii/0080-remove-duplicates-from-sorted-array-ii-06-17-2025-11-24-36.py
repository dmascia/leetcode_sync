class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        count_index = 0
        current_index = 1
        for idx in range(1, len(nums)):
            if nums[idx] != nums[idx - 1]:
                count_index = 0
                nums[current_index] = nums[idx]
                current_index += 1
            else:
                count_index += 1
                if count_index <= 1:
                    nums[current_index] = nums[idx]
                    current_index += 1
        return current_index
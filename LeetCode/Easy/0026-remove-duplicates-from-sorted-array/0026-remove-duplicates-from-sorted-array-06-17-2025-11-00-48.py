class Solution:
    def removeDuplicates(self, nums: List[int]) -> int:
        count_index = 0
        for current_index in range(1, len(nums)):
            if nums[count_index] != nums[current_index]:
                count_index += 1
                nums[count_index] = nums[current_index]

        return count_index + 1
        
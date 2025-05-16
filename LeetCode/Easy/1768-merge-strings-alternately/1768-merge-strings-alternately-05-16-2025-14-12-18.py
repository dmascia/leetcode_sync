class Solution:
    def mergeAlternately(self, word1: str, word2: str) -> str:
        result = ""

        for i in range(len(word1)):
            result += word1[i]
            if i < len(word2):
                result += word2[i]
        
        result += word2[len(word1): len(word2)]
        
        return result
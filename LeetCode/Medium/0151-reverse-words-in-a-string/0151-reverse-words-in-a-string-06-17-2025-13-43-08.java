class Solution {
    public String reverseWords(String s) {
       String[] words = s.trim().split("\\s+");
       StringBuilder results = new StringBuilder();
       for (int i = words.length - 1; i >= 0; i--) {
            results.append(words[i]).append(i > 0 ? " " : "");
       }
       return results.toString();
    }
}
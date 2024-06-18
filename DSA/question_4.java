// 4. Rotate Array
// Question: Given an array and an integer k, rotate the array to the right by k steps.
// Explanation:
// Given an array and an integer k, we want to move the last k elements of the array to the front.
// We can achieve this by performing the following steps:
// ● Reverse the entire array.
// ● Reverse the first k elements.
// ● Reverse the remaining elements.
// Example Input:
// Input Array: [1, 2, 3, 4, 5, 6, 7]
// k = 3
// Answer:
// Rotated Array: [5, 6, 7, 1, 2, 3, 4]
// Test Input:3
// Input Array: [3, 8, 9, 2, 5]
// k = 4;




package DSA;

public class question_4 {

    public static int[] rotateArray(int k,int A[])
    {
        int ans[]=new int [A.length];
        int rot=A.length-k;
        int index=0;
        for (int i=rot;i<A.length;i++) 
        {
            ans[index]=A[i];
            index++;
        }
        for(int i=0;i<rot;i++)
        {
            ans[index]=A[i]; 
            index++;
        } 
        return ans;
    } 


    public static void main(String[] args) {
       int[] Array={1, 2, 3, 4, 5, 6, 7};
        int k = 3;
        
       int ans[]= rotateArray(k, Array);
       for(int i=0;i<ans.length;i++) System.out.println(ans[i]);
        
    }
    
}

//timecomplex-O(2n)
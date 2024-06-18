package DSA;
// 1: Find Missing Number
// Question: Given an array of integers from 1 to n with one missing number, find the missing number.
// Explanation:
// One approach is to calculate the sum of integers from 1 to n using the formula (n * (n + 1)) / 2.
// Then, iterate through the given array and calculate the sum of all elements.
// The missing number can be found by subtracting the sum of array elements from the sum of integers
// from 1 to n.
// Example Input:
// Input Array: [1, 2, 3, 4, 6, 7, 8]
// Answer:
// Missing Number: 5
// Test Input:
// Input Array: [1, 3, 4, 5, 6, 7, 8, 9, 10]


public class question 
{
    public static void main (String[] args) {
        int Array[]={1, 3, 4, 5, 6, 7, 8, 9, 10};
        System.out.println(missingno(Array));
    }
        
    
    
    public static int missingno (int A[])
        {
            for(int i=0;i<A.length;i++)
            {
                if((i+1)!=A[i]) return i+1;
            }
            return 0;
        }
}


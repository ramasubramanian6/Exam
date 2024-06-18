package DSA;

import java.util.HashSet;

// 2: Remove Duplicates
// Question: Given a sorted array, remove the duplicates in-place such that each element appears only
// once and returns the new length.
// Explanation:
// Start with two pointers, i and j, initially pointing to the first two elements of the array.
// Iterate through the array with the pointer j, comparing each element with the element at index i.
// If the element at index j is different from the element at index i, increment i and update the element at
// index i with the element at index j.
// Continue this process until j reaches the end of the array. The length of the array up to index i will be
// the new length without duplicates.
// Example Input:
// Input Array: [1, 1, 2, 2, 3, 4, 4, 5]
// Answer:
// New Length: 5
// Test Input:
// Input Array: [1, 1, 1, 2, 2, 3, 3, 3, 4, 5]



public class question_2 
{

    public static int get_Org_len(int A[])
    {
        HashSet<Integer>Hash=new HashSet<>();

        for(int i=0;i<A.length;i++)
        {
            if(! Hash.contains(A[i])) Hash.add(A[i]);
           
        }
        return Hash.size();

    }


    public static void main (String[] args) {
        int[] Array= {1, 1, 1, 2, 2, 3, 3, 3, 4, 5};
        System.out.print(get_Org_len(Array));
        
    }

}
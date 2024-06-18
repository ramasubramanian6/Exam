// 3. Recursion Question: Factorial
// Question: Write a recursive function to find the factorial of a non-negative integer n.
// Explanation:
// The factorial of a non-negative integer n is the product of all positive integers less than or equal to n.
// Base case: If n is 0 or 1, return 1 (the factorial of 0 and 1 is 1).
// Recursive step: Multiply n by the factorial of n - 1 (i.e., n * factorial(n - 1)).
// Example Input:
// n = 5
// Answer:
// Factorial of 5: 120
// Test Input:
// n = 10


package DSA;

public class question_3 {


    public static int factorial(int n)
        {
           if(n<0) return 0;
           else if(n==0) return 1;
           else {
                return n*factorial(n-1);
           }
            
        }

    public static void main(String[] args) {
        System.out.println(factorial(5));
        
    }
    
}

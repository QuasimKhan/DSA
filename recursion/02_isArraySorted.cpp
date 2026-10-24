#include <iostream>

using namespace std;

// Checks if the array is sorted in ascending order
bool isArraySorted(int A[], int n) {
    if (n <= 1) return true; // Safer base case

    return (A[n-1] < A[n-2]) ? false : isArraySorted(A, n-1);
}

int main() {
    constexpr int n = 5;
    int arrayElements[n];
    
    cout << "Enter 5 Numbers: \n";
    
    // You must use a loop to take array inputs in C++
    for (int i = 0; i < n; i++) {
        cin >> arrayElements[i];
    }

    bool result = isArraySorted(arrayElements, n);
    
    // Fix 2: Correct ternary operator syntax (cannot mix with 'if')
    cout << (result ? "Sorted" : "Not Sorted") << "\n";
    
    // Fix 3: main() should return 0 to indicate successful execution
    return 0;
}
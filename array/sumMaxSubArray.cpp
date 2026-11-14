#include <iostream>

using namespace std;


int sumMaxSubarray(int arr[], int size){

    int maxSum = 0;

    for (int start = 0; start < size; start++)
    {
        int currentSum = 0;
        for (int end = start; end < size; end++)
        {
            currentSum += arr[end];
            maxSum = max(currentSum, maxSum);
        }
        
    }

    return maxSum;
    
}


int sumMaxSubarrayWithKadanAlgo(int arr[], int size){
    int currentSum = 0;
    int maxSum = -404;

    for (int i = 0; i < size; i++)
    {
        currentSum += arr[i];
        maxSum = max(currentSum, maxSum);

        if (currentSum < 0)
        {
            currentSum = 0;
        }
        
    }
    

    return maxSum;

}

int main(){


    int size = 7;
    int arr[size] = {3,-4,5,4,-1,7,-8};

    int result = sumMaxSubarray(arr, size);
    int result2 = sumMaxSubarrayWithKadanAlgo(arr, size);

    cout<<"Sum of maximum array is : "<<result<<endl;
    cout<<"Sum of maximum array is with kedan's algo : "<<result2<<endl;
    return 0;
}
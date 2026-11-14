#include <iostream>

using namespace std;


int majorityElement(int arr[], int size){
    int freq = 1;
    int ans = arr[0];

    for (int i = 1; i < size; i++)
    {


        if (arr[i] == arr[i-1])
        {
            freq++;
        } else {
            freq = 1;
        }

        if (freq > size/2)
        {
            ans = arr[i];
            return ans;
        }

        
        
        
        
    }

    return ans;
    
}


int main() {


    int n = 9;
    int arr[n] = {1,2,2,2,2,2,3,3};

    int result = majorityElement(arr,n);

    cout<<result;


    return 0;
}
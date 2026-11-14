#include <iostream>

using namespace std;


int majorityElement(int arr[], int n){
    int freq = 0, ans = 0;

    for (int i = 0; i < n; i++)
    {
        if (freq == 0)
        {
            ans = arr[i];
        }

        if (ans == arr[i])
        {
            freq++;
        } else{
            freq--;
        }
        
        
    }


    return ans;
    
}


int main() {


    int size = 9;
    int arr[size] = {1,2,3,2,4,2,4,2,6};

    int result = majorityElement(arr,size);


    cout<<result;


    return 0;
}
#include <iostream>

using namespace std;


void reverseArray(int arr[], int size){

        int next = 0, prev = size - 1;

        while (next < prev)
        {
            int temp = arr[next];
            arr[next] = arr[prev];
            arr[prev] = temp;

            next++;
            prev--;
        }
        
}

int main(){

    int nums[] = {1,2,8,4,5};

    reverseArray(nums, size(nums));

    for (int i = 0; i < size(nums); i++)
    {
        cout<< nums[i]<<"\t";
    }
    


    return 0;
}
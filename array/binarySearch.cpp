#include <iostream>
#include <vector>


using namespace std;


int findTargetUsingBinarySearch(vector<int>& arr, int target){
    int start = 0;
    int end = arr.size() - 1;
    

    while (start <= end)
    {
        int midvalue = (start + end) / 2;
        if (target > arr[midvalue])
        {
            start = midvalue + 1;
        } else if(target < arr[midvalue]){
            end = midvalue - 1;
        } else {
            return midvalue;
        }
        
    }

    return -1;
    

}


int main(){


    vector<int> arr = {-1,0,3,6,12,19,20,21};
    int target = 20;

    int result = findTargetUsingBinarySearch(arr,target);

    cout<<"The index of taget is : "<<result<<endl;


    return 0;
}
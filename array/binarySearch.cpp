#include <iostream>
#include <vector>


using namespace std;


int findTargetUsingBinarySearch(vector<int>& arr, int target){
    int start = 0;
    int end = arr.size() - 1;
    

    while (start <= end)
    {
        int midvalue = start +(end - start) / 2;

        if (target == arr[midvalue]) return midvalue;
        target > arr[midvalue] ? start = midvalue + 1 :  end = midvalue - 1;
        
        
    }

    return -1;
    

}


int binarySeachUsingRecusrion(vector<int> arr, int target, int start, int end){
    int mid = start + (end - start)/2;

    if (target > arr[mid])
    {
        return binarySeachUsingRecusrion(arr,target,mid+1,end);
    } else if(target < arr[mid]){
        return binarySeachUsingRecusrion(arr,target,start,mid-1);
    } else return mid;

    return -1;
    
}


int main(){


    vector<int> arr = {-1,0,3,6,12,19,20,21};
    int target = 20;

    int result = findTargetUsingBinarySearch(arr,target);
    int recusionResult = binarySeachUsingRecusrion(arr, target, 0, arr.size() -1);


    cout<<"The index of taget is : "<<result<<endl;
    cout<<"The index of taget is (recursion): "<<recusionResult<<endl;


    return 0;
}
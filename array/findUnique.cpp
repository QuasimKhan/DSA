// This is the leet proble no 136 where we need to find unique value of given array.

#include<iostream>
#include<vector>


using namespace std;


int findUnique(vector<int> arr){

    int ans = 0;
    for (int value : arr)
    {
        ans = ans ^ value;
    }
    return ans;
    
}


int main(){


    vector<int> nums;
    nums.assign({1,3,3,1,2});

    int uniqueNumber = findUnique(nums);
    cout<<"The nunique number is: "<<uniqueNumber<<endl;


   
    



    return 0;
}
#include <iostream>
#include <vector>


using namespace std;



vector<int> pairSum(int arr[], int size, int target){


    vector<int> pair;

    for (int i = 0; i < size; i++)
    {
        for (int j = i+1; j < size; j++)
        {
            int sum = arr[i] + arr[j];

            if (sum == target)
            {
                pair.push_back(arr[i]);
                pair.push_back(arr[j]);
            }

        
        }
        
    }
    
    
    return pair;
}



//optiized approach

vector<int> optimizedPairSum(int arr[], int size, int target){
    int start = 0;
    int end = size-1;

    vector<int> indexNumber;

    while (start< end)
    {

        int currentSum = arr[start] + arr[end];
        if (currentSum > target)
        {
            end--;
        } else if ((arr[start] + arr[end]) < target)
        {
            start++;
        } else {
             indexNumber.push_back(start);
            indexNumber.push_back(end);
            return indexNumber; 
        }


        
        
    }
    return indexNumber;
    
}




int main(){


    int size = 4;
    int nums[] = {2,7,11,15};
    int target = 18;

    vector<int> result = pairSum(nums, size, target);
    vector<int> index = optimizedPairSum(nums, size, target);

    cout<<"The elements are (brute): "<<endl;
    for (int value : result)
    {
        cout<<value<<"\t";
    }

    cout<<endl;
    cout<<"The indexs are (optimzed): "<<endl;
    for (int value : index)
    {
        cout<<value<<"\t";
    }
    
    return 0;
}
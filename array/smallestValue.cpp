#include <iostream>


using namespace std;


int main(){

    int nums[] = {10,20,30,40,100};
    int size = 5;
    int smallest = __INT_MAX__;

    for(int i = 0; i < size; i++){
        // if (nums[i] < smallest)
        // {
        //     smallest = nums[i];
        // }

      smallest =  min(nums[i], smallest);
        
    }


    cout<< "The smallest number is :  "<<smallest<<endl;
    return 0;

}
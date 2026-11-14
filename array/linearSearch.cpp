#include <iostream>

using namespace std;


int main(){


    int nums[] = {4,5,7,8,1,2,5};
    int size = 7;
    int target = 8;
    int index = -1; //if not found the -1

    for (int i = 0; i < size; i++)
    {
        if (nums[i] ==  target)
        {
            index = i;
        }
        
    }


    cout<< index;


    

    return 0;

}
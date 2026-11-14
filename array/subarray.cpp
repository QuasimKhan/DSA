#include <iostream>


using namespace std;



int main() {

    int size = 5;
    int nums[size] = {10,20,30,40,50};

    for (int start = 0; start < size; start++)
    {
        for(int end = start; end < size; end++){
            for (int i = start; i <= end; i++)
            {
                cout<<nums[i];
            }

            cout<<" ";
            
        }

        cout<<endl;
    }
    


    return 0;

}
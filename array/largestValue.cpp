#include <iostream>

using namespace std;


int main(){

    int number[] {10,50,20,3430,2340};
    int largest = number[0];
    int index = 0;

    for (int i = 0; i < size(number); i++)
    {
        if (number[i]>largest)
        {
            largest = number[i];
            index = i;
        }
        
    }



    cout<<"Largest number: "<<largest<<endl;
    cout<<"The index of "<<largest<<" is "<<index<<endl;
    

    


    return 0;
}
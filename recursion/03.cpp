// This program demonstrates a recursive function that counts down from 100 to 1.

#include <iostream>

using namespace std;

int printTo100(int number){
    if (number == 0)
    {
        return number;
    }
    cout<<number<<"\t";
    return printTo100(number-1);
}

int main(){

    printTo100(100);
    return 0;
}  

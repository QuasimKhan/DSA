#include <iostream>

using namespace std;


int main(){

    int marks[5];

    cout<<"Enter the marks of the students: "<<endl;

    for (int i = 0; i <  size(marks); i++)
    {
        cin>>marks[i];
    }



    for (int i = 0; i < size(marks); i++)
    {
        cout<<marks[i]<<"\t";
    }
    
    


    return 0;
}
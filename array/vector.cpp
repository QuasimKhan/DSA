#include <iostream>
#include <vector>

using namespace std;


int main(){
 
    vector<int> nums;

    cout<<"Number before any operation on vector: "; 
    for (int num : nums)
    {
        cout<<num;
    }

    cout<<endl;
    

    nums.assign({1,2,3,5});
    nums.push_back(10);
    nums.push_back(11);


     cout<<"Number after assign operation on vector: "; 
    for (int num : nums)
    {
        cout<<num<<"\t";
    }

    cout<<"Capacity: "<<nums.capacity();


    cout<<endl;




    return 0;
}
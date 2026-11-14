#include <iostream>

using namespace std;


long long decimalToBinary(int num){
    int ans = 0;
    int pow = 1;

    while (num > 0)
    {
        int rem = num % 2;
        num = num / 2;
        ans += (rem * pow);
        pow = pow * 10;
    }

    return ans;
    
}


int main(){
    
    int num = 4;

    cout<<"The binary of "<<num<< " is "<<decimalToBinary(num)<<endl;

    return 0;
}
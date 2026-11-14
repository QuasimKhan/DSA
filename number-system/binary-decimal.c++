#include <iostream>

using namespace std;


int binaryToDecimal(long long num){
    int ans = 0, pow = 1;

    while (num > 0)
    {
        int rem = num % 2;
        ans += rem * pow;
        num = num / 10;
        pow = pow * 2;
    }


    return ans;
    
}


int main(){


    long long number = 1110111111011;

    cout << "The out of "<<number<< " is "<< binaryToDecimal(number)<<endl;

    return 0;
}
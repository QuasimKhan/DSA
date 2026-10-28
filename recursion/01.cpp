#include <iostream>

using namespace std;

unsigned long long fact(unsigned long long n) {
    return (n <= 1) ? 1 : n * fact(n - 1);
}

int main() {
    unsigned long long n;
    cin >> n;

    unsigned long long factorial = fact(n);

    cout << "The result is " << factorial << "\n";

    return 0;
}
#include <iostream>

using namespace std;

int main(){
    int list[] = {1,2,4,5,7,8,9,13,45,67,78,89};
    int item = 13;
    int length = sizeof(list)/sizeof(list[0]);
    int low = 0;
    int high = length-1;

    while (low<=high)
    {
        int mid = (low+high)/2;
        int guess = list[mid];

        if (guess == item){
            cout << mid;
        }
        if (guess > item){
            high = mid-1;
        }
        else{
            low = mid+1;
        }
    }
    return 0;
 
}
#include<stdio.h>

int main(){
	int arr[10] = {2,5,1,3,9,40,7,10,6,35};
	int i, j, temp;
	for(i=9; i > 0; i--){
		for(j=0; j<i;j++){
			if(arr[j] > arr[j+1]){
				temp = arr[j];
				arr[j] = arr[j+1];
				arr[j+1] = temp;
			}
		}
	}
	for(i=0;  i<10; i++){
	printf("%d ", arr[i]);
	}
}

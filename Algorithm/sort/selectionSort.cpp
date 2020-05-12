#include<stdio.h>

int main (){
	int arr[10] = {2,5,1,3,9,40,7,10,6,35};
	int i, j, temp ;
	
	for(i = 0; i<9; i++){
		for(j = i+1; j < 10 ; j++){
			if(arr[i]>arr[j]){
				temp = arr[j];
				arr[j] = arr[i];
				arr[i] = temp;
			}
		} 
	}	
	for(i=0;  i<10; i++){
		printf("%d", arr[i]);
	}
}

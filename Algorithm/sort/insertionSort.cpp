#include<stdio.h>

int main (){
	int arr[10] = {2,5,1,3,9,40,7,10,6,35};
	int i, j, key;
	
	for(i=1; i<10; i++){
			key = arr[i];
		for(j=i-1; j>=0; j--){
			if(key < arr[j]){
				arr[j+1] = arr[j];
			}else{
				break;
			}
		}
		arr[j+1] = key;
		
	}
	for(i=0;  i<10; i++){
		printf("%d ", arr[i]);
	}
}

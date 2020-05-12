#include<stdio.h>

void merge(int list[], int left, int right, int mid){
	int temp[1000];
	int i=left;
	int j=mid+1;
	int k=0;
//	printf("left : %d,  right: %d, mid: %d  \n", left, right, mid);
	while(i<=mid && j<=right){
		if(list[i] <= list[j]){
			temp[k] = list[i];
			k++;
			i++;
		}
		else{
			temp[k] = list[j];
			k++;
			j++;
		}
	}
	while(i<=mid){
		temp[k] = list[i];
		k++;
		i++;
	}
	while(j <= right){
		temp[k] = list[j];
		k++;
		j++;
	}
	k--;
	while(k>=0){
		list[left+k] = temp[k];
		k--;
	}
}

void merge_sort(int list[], int left, int right){
	
	int mid ;
		
	if(left < right){
		mid = (left+right)/2;
		printf("left : %d,  right: %d, mid: %d  \n", left, right, mid);
		merge_sort(list, left, mid);	//¿ÞÂÊ
		merge_sort(list, mid+1, right);		//¿À¸¥ÂÊ 
		merge(list, left, right, mid);
	}
	else{
		return;
		
	}
}

int main (){
	int list[8] = {2,5,1,3,9,40,7,10};
	int l = 0;
	merge_sort(list, 0, 7);
	
	for(l=0;  l<8; l++){
		printf("%d ", list[l]);
	}
}

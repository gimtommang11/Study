#include<stdio.h>

int gap_insertion_sort(int list[], int first, int last, int gap);
 
int shell_sort(int list[], int n) 
{
  int gap, j;
 
  for (gap = n/2; gap > 0; gap /= 2)
  {
    if (gap % 2 == 0)
      gap++;

    for (j = 0; j < gap; j++)
      gap_insertion_sort(list, j, n - 1, gap);
  }
}
 int gap_insertion_sort(int list[], int first, int last, int gap)
{
  int i, j, key;

  for (i = first + gap; i <= last; i += gap)
  {
    key = list[i]; 
    for (j = i - gap; j >= first && list[j] > key; j -= gap)
    {
      list[j + gap] = list[j];
    }
    list[j + gap] = key;
  }
}
  
 
int main(){
int list[] = {11,10,33,22,55,9,99,81,15,27};
int size = sizeof(list)/sizeof(int);
shell_sort(list, size);
	for(int i=0;  i<10; i++){
		printf("%d ", list[i]);
	}
}



module.exports = function getZerosCount(number, base) {
  
 var  arr=[];

 if (number<2) return 0;

for (let k=2;k<=base;k++){
  
  while (base%k==0 && base>1){
    arr.push(k);
    base/=k;
    
  } 
  
}


for (i=0; i<arr.length; i++)
{
  st=1;
  sum=0;
  do{
    del=Math.pow(arr[i],st);
    sum+=Math.trunc(number/del);
    st++;
 }
 while(Math.trunc(number/del)>0);
 arr[i]=sum;
 
}


for (i=0; i<arr.length; i++)
{
  pow=1;
  for (j=i+1; j<arr.length; j++){
  if(arr[i]==arr[j]) pow++;}
  arr[i]=Math.trunc(arr[i]/pow);
  

var min=arr[0];
for (i=1; i<arr.length; i++ ){
if (arr[i]<min) min=arr[i];
} 

return min;
}

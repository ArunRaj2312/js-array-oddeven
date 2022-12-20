let arrayval=[1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
let odd=[];
let even=[];
let a=0;
let b=0;
for(i=0;i<20;i++){
    if(arrayval[i]%2==0){
        even[a]=arrayval[i]; 
        a++;  
    }
    else
    {
         odd[b]=arrayval[i]; 
         b++;       
    }
}
console.log(even);
console.log(odd); 

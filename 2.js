let arr=[1,2,0,3,4,0];

function sol(arr){
    let count=0;
    let arr2=[]
    for( let j=0;j<arr.length;j++){
        if(arr[j]!=0){
            arr2.push(arr[j])
        }
        else{
            count++;
        }
    }
    for(let i=0;i<count;i++){
        arr2.push(0)
    }

    console.log(arr2)
}

sol(arr)
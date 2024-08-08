//task 1 
// factorial
// function fact(n){
//     if(n==1){
//         return 1;
//     }
//     return n*fact(n-1);
// }

// console.log(fact(5));



//factorial
// function factorial(n){ // 1 based indexing 
//     if(n==1){
//         return 0;
//     }
//     if(n==2|| n==3){
//         return 1;
//     }

//     let fact = factorial(n-1)+factorial(n-2);
//     return fact;
// }

// console.log(factorial(10))




// find sum of all elements
// let sum = (arr)=>{
//     let sumval = 0;
//      for(let i =0;i<arr.length;i++){
//         sumval+= arr[i];
//      }
//      return sumval;
// }

// sum of all elements 
// function sum(arr,n){
//     if(n<0){
//         return  0;
//     }


//      let result = arr[n]+sum(arr,n-1);
//      return result;
     
// }
// console.log(sum([1,2,3,4,5],4))
// console.log(sum([2,3,1,4,5]))

// let findmax=(arr)=>{
    // let max = Number.MIN_VALUE;
    // for(let i = 0;i<arr.length;i++){
    //      if(arr[i]>max){
    //         max= arr[i];
    //      }
    // }
    // return max;

// }
// maximum
// function returnmax(arr,size){
//     if(size<0){
//         return 0;
//     }
//     return Math.max(arr[size],returnmax(arr,size-1));
// }

// console.log(returnmax([2,233,4,78,89],4))

// console.log(findmax([2,1,3,4,6]))


// function reverseString(str){ // string in javascript is not mutable or not work on original  , it will have to return new variable 
//    let result = "";
//    let n  = str.length -1;
//    while(n>=0){
//     result+= str[n];
//     n--;
//    }
//    return result;
// }

// reverse string
// function reverseString(str,i){
//     if(i<0){
//         return '';
//     }
    
//     return str[i]+reverseString(str,i-1);
   

// }

// let result= reverseString("akshay",5)
// console.log(result);


// function checkpalindrome(str){
//    let newstr = str.toLowerCase()
//    let start= 0;
//    let end = str.length-1;
//    while(start<end){
//        if(newstr[start] !==newstr[end]){
//            return false;
//        }
//        start++;
//        end--;
//    }
//    return true;
// }

// console.log(checkpalindrome("nayan"))


// // check palindrome
// function checkPalindrome(str,start,end){
//    if(start>=end){
//     return true;
//    }
    
//    if(str[start] != str[end]){
//     return false;
//    }
//    return checkPalindrome(str,start+1,end-1);
    
// }

// let str = "Naman"

// let palindrome = checkPalindrome(str.toLowerCase(),0,str.length-1)
// console.log(palindrome)


// let binarySearch = (arr,start,end,target)=>{
    
//     let mid = (start +(end-start))/2;
//     if(arr[mid]==target){
//         return mid;
//     }else if(arr[mid]<target){
//         binarySearch(arr,start+1,end,target);
//     }else{
//         binarySearch(arr,start,end-1,target);
//     }

// }

// console.log(binarySearch([1,2,3,4,5],0,4,3));


// let targetValue = (arr,target,i)=>{
//     if(i == arr.length){
//         return 0;
//     }

//     let value = targetValue(arr,target,i+1);

//     if(arr[i]== target){
//         value +=1;

//     }
   
//     return value;
    
// }
// console.log(targetValue([2,3,14,5,5,5,5,2,2],5,0))


class Tree{
    constructor(val){
        this.data = val;
        this.left = null;
        this.right= null;
    }
   

    
    
}

let newTree = new Tree(45)
// newTree.left(34)
// newTree.right(45)
let newsecondtree = new Tree(38)
newTree.left= newsecondtree;

// newTree.nextNode(56);
// newTree.nextNode(34)
// // inorder traversal

function inordertraversal(root){
    if(root == null){
        return ;
    }
    inordertraversal(root.left);
    console.log(root.data)
    inordertraversal(root.right);
}

inordertraversal(newTree)

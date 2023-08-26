class Node{
    constructor(data, left = null, right = null){
        this.data = data;
        this.left = left;
        this.right = right;
    }
}

class Tree{
    constructor(arr){
        this.arr = arr;
        this.root = null;
        this.sortedArr = this.quickSort(this.removeDuplicates(arr));

    }
    removeDuplicates(arr){
        let uniqueArr = [];
        for(let el of arr){
            if(!uniqueArr.includes(el)){
                uniqueArr.push(el);
            }
        }
        return uniqueArr;
    }
    quickSort(arr){
        if(arr.length <= 1){
            return arr;
        }
        let pivot = arr[0];
        let leftArr = [];
        let rightArr = [];
        for(let i = 1; i < arr.length; i++){
            if(arr[i] < pivot){
                leftArr.push(arr[i]);
            }else{
                rightArr.push(arr[i]);
            }
        }
        return [...this.quickSort(leftArr), pivot, ...this.quickSort(rightArr)];
    }

    buildTree(arr = this.sortedArr, start = 0, end = arr.length - 1){
        if(start > end){
            return null;
        }
        // console.log('arr = ' + arr);
        let mid = Math.floor((start+end)/2);
        let node = new Node (arr[mid]);
        if(!this.root){
            this.root = node;
        }
        // console.log(`mid = ${mid} start  = ${start} end = ${end}`)
        node.left = this.buildTree(arr, start, mid - 1);
        // console.log(`left: ${node.left}`)
        node.right = this.buildTree(arr, mid + 1, end);
        // console.log(`right: ${node.right} `)

        // console.log(`node ${node} data: ${node.data} left ${node.left} right: ${node.right}`)
        return node;
        
    }
    min(){
        let current = this.root;
        while(current.left !== null){
            current = current.left;
        }
        console.log('Min is ' + current.data);
        return current.data;
    }
    max(){
        let current = this.root;
        while(current.right !== null){
            current = current.right;
        }
        console.log('Max is ' + current.data);
        return current.data;
    }
    
    insert(data){
        let node = this.root;
        console.log(node)
        if(!node){
            this.root = new Node(data);
            return;
        }
        const searchData = (node) => {
            // console.log(`data ${data} node data: ${node.data}`)
            if(data < node.data){
                if(!node.left){
                    node.left = new Node(data);
                    return;
                }else if(node.left){
                    return searchData(node.left);
                }

            }else if(data > node.data){
                if(!node.right){
                    node.right = new Node(data);
                    return;
                }else if(node.right){
                    return searchData(node.right);
                }
            }else{
                return;
            }
        }
        // console.log(searchData(node));
        return searchData(node);

    }
    delete(data){
        const removeNode = (node, data) => {
            if(node === null){
                return null;
            }
            if(data === node.data){
                if(node.left === null && node.right === null){
                    return null;
                }
                if(node.left === null){
                    return node.right;
                }
                if(node.right === null){
                    return node.left;
                }
                let tempNode = node.right;
                while(tempNode.left !== null){
                    tempNode = tempNode.left;
                }
                node.data = tempNode.data;
                node.right = removeNode(node.right, tempNode.data);
                return node;
            }else if(data < node.data){
                node.left = removeNode(node.left, data);
                return node;
            }else{
                node.right = removeNode(node.right, data);
                return node;
            }

        }
        this.root = removeNode(this.root, data);
    }
    find(data){
        let current = this.root;
        while(current.data !== data){
            if(data < current.data){
                current = current.left;
            }else{
                current = current.right;
            }
            if(current === null){
                console.log("Data is not present");
                return null;
            }

        }
        console.log('data found at: ' + current.data);
        return current;
    }
    levelOrderT(){
        let queue = [];
        let current = this.root;
        while(current !== null){}
    }
    prettyPrint(node = this.root, prefix = "", isLeft = true){

        if (node === null) {
          return;
        }
        if (node.right !== null) {

          this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
          this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
    }
}

     
    
    


let TestTree = new Tree([5,2,2,5,1,2,3,4,6]);
TestTree.buildTree();
TestTree.insert(10);

TestTree.find(5);
TestTree.max();
TestTree.min();
TestTree.delete(3);

TestTree.prettyPrint();




























































// class Node{
//     constructor(data, left = null, right = null){
//        this.data = data;
//        this.left = left;
//        this.right = right;
//     }

// }

// class BST{
//     constructor(){
//         this.root = null;
//     }
//     isEmpty(){
//         return !this.root;
//     }
//     add(data){//[19,45,85,1,9,19,245,9]
//         const node = this.root;
//         if(!node){
//             this.root = new Node(data);
//             return;
//         }
//         const searchTree = (node) => {
//         if(data < node.data){
//             if(!node.left){
//                 node.left = new Node(data);
//                 return;
//             }else if(node.left){
//                 return searchTree(node.left);
//             }
//         }else if(data > node.data){
//             if(!node.right){
//                 node.right = new Node(data);
//                 return;
//             }else if(node.right){
//                 return searchTree(node.right);
//             }
//         }else{
//             return null;
//         }

//         }
//         return searchTree(node);
//     }
    
//     prettyPrint(node = this.root, prefix = "", isLeft = true){

//         if (node === null) {
//           return;
//         }
//         if (node.right !== null) {
//           this.prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
//         }
//         console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
//         if (node.left !== null) {
//           this.prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
//         }
//       };
// }
// let BalancedTree = new BST();
// console.log('hello');

// let arr = [19,45,85,1,9,19,245,9,2,1,3,5];
// function quicksort(arr) {
//     if (arr.length <= 1) {
//         return arr;
//     }

//     const pivot = arr[Math.floor(arr.length / 2)];
//     const less = arr.filter(item => item < pivot);
//     const equal = arr.filter(item => item === pivot);
//     const greater = arr.filter(item => item > pivot);

//     return [...quicksort(less), ...equal, ...quicksort(greater)];
// }

// let sortedArr = quicksort(arr);
// console.log(sortedArr)
// BalancedTree.add(sortedArr[Math.floor(sortedArr.length/2)])
// for(let i in arr){
//     BalancedTree.add(arr[i]);
// }
// console.log(BalancedTree.isEmpty());
// BalancedTree.prettyPrint();





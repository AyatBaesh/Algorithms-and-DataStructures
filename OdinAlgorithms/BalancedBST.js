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
        let sortedArr = this.quickSort(this.removeDuplicates(arr));
        this.root = this.buildTree(sortedArr);
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
        let mid = parseInt((start+end)/2);
        let node = new Node (arr[mid]);
        node.left = this.buildTree(arr, start, mid - 1);
        node.right = this.buildTree(arr, mid + 1, end);
        return node;
        
    }
    rebalance(){
        if(!this.root) return;
   
        let sorted = this.quickSort(this.removeDuplicates([...this.inOrder()]));
        this.root = this.buildTree(sorted);
        


    }
    min(){
        let current = this.root;
        while(current.left !== null){
            current = current.left;
        }
        return current.data;
    }
    max(){
        let current = this.root;
        while(current.right !== null){
            current = current.right;
        }
        return current.data;
    }
    insert(data, root = this.root) {
        if (root === null) return new Node(data);
        root.key < data
          ? (root.right = this.insert(data, root.right))
          : (root.left = this.insert(data, root.left));
        return root;
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
        let count = 0;
        while(current.data !== data){
            count++;
            if(data < current.data){
                current = current.left;
            }else{
                current = current.right;
            }
            if(current === null){
                return "Data is not present";
            }
        }
        return current;
    }
    findDepth(data){
        if(!data){
            return null;
        }
        let current = this.root;
        let count = 0;
        while(current.data !== data){
            count++;
            if(data < current.data){
                current = current.left;
            }else{
                current = current.right;
            }
            if(current === null){
                return "Data is not present";
            }
        }
        return count;
    }
    findHeight(node = this.root) {

            if (node == null) {
                return -1;
            };
            let left = this.findHeight(node.left);
            let right = this.findHeight(node.right);
            return left > right ? left + 1 : right + 1;
    } 

    isBalanced(node = this.root){
        if(node == null) return true;
        const heightDifference = Math.abs(this.findHeight(node.left) - this.findHeight(node.right));
        return (heightDifference <= 1 && this.isBalanced(node.left) && this.isBalanced(node.right));
    }
    levelOrder(callback){

        if(!this.root) return [];
        let queue = [this.root];
        let output = [];   

        while(queue.length){
            let length = queue.length;
            output.push(queue.map(node => node.data));
            while(length--){
                let node = queue.shift();
                if(node.left)  queue.push(node.left);
                if(node.right) queue.push(node.right);
                if (callback) callback(node);
            }
        }
        if(!callback) return output;
    }
    inOrder(callback){
        if(!this.root) return [];
        let result = [];
        let iterate = (node = this.root) => {
            if(!node) return;
            iterate(node.left);
            if(callback) callback(node);
            result.push(node.data);
            iterate(node.right);
        }
        iterate();
        if(!callback) return result;
    }
    preOrder(callback){
        if(!this.root) return [];
        let result = [];
        let iterate = (node = this.root) => {
            if(!node) return;
            iterate(node.right);
            if(callback) return callback(node);
            result.push(node.data);
            iterate(node.left);
        }
        iterate();
        return result;
    }
    postOrder(callback){
        if(!this.root) return [];
        let result = [];
        let iterate = (node = this.root) => {
            if(!node) return;
            iterate(node.left);
            iterate(node.right);
            if(callback) return callback(node);
            result.push(node.data);

        }
        iterate();
        return result;
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

     
    
    


let TestTree = new Tree([5,2,2,4,6,78,123,45]);
let newArr = [25,56,78,1,3,4,1];
TestTree.prettyPrint();
console.log('inOrder ' + TestTree.inOrder() + '\n' +
            'preOrder ' +  TestTree.preOrder() + '\n' +
            'postOrder ' + TestTree.postOrder() + '\n');
for(let i of newArr){
    TestTree.insert(i);
}

console.log(TestTree.isBalanced());
TestTree.rebalance();
console.log(TestTree.isBalanced());
TestTree.prettyPrint();
console.log(TestTree.find(10));
console.log('max is ' + TestTree.max());
console.log('min is ' + TestTree.min());
TestTree.delete(3);


console.log('levelOrder ' + TestTree.levelOrder());

console.log('height of 4 is ' + TestTree.findHeight(4));
console.log('depth of 45 is ' + TestTree.findDepth(45));



























































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





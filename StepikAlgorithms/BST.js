class Node{
    constructor(data, left = null, right = null){
       this.data = data;
       this.left = left;
       this.right = right;
    }

}

class BST{
    constructor(){
        this.root = null;
    }
    isEmpty(){
        return !this.root;
    }
    add(data){//[19,45,85,1,9,19,245,9]
        const node = this.root;
        if(!node){
            this.root = new Node(data);
            return;
        }
        const searchTree = (node) => {
        if(data < node.data){
            if(!node.left){
                node.left = new Node(data);
                return;
            }else if(node.left){
                return searchTree(node.left);
            }
        }else if(data > node.data){
            if(!node.right){
                node.right = new Node(data);
                return;
            }else if(node.right){
                return searchTree(node.right);
            }
        }else{
            return null;
        }
        return searchTree(node);
    }
    }
    prettyPrint(node, prefix = "", isLeft = true){
        node = this.root;
        if (node === null) {
          return;
        }
        if (node.right !== null) {
          prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
        }
        console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
        if (node.left !== null) {
          prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
        }
      };
}
let BalancedTree = new BST();
console.log('hello')
let arr = [19,45,85,1,9,19,245,9];
for(let i in arr){
    BalancedTree.add(arr[i]);
}
console.log(BalancedTree.isEmpty());
BalancedTree.prettyPrint();


//GIF SEARCH 
// <!-- <script>
// const searchbar = document.querySelector('#search');
// const img = document.querySelector('img');

// async function getCats() {
//     const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=04a8dUy109XNl3PM7HjQw5PrQGnUjPU3&s=cats')
//     const catData =  await response.json();
//     img.src = catData.data.images.original.url;
    
// }

// async function searchGifs(keyword){
//     let response;
//     let searchData;
//     try{
//         response = await fetch(`https://api.giphy.com/v1/gifs/translate?api_key=04a8dUy109XNl3PM7HjQw5PrQGnUjPU3&s=${keyword}`,{mode: 'cors'});
//     } catch (error) {
//         console.log('Error in fetching data:', error);
//     }
//     try{
//          searchData = await response.json();
//     } catch (error) {
//         console.log('Error in processing JSON response:', error);
//     }
//     try{
//     img.src = searchData.data.images.original.url;
//     } catch (error){
//         alert("Nothing found :(")
//     }
// }

// (function renderPage() {
//     getCats();
//     document.querySelector('form').addEventListener('submit', (event) => {
//         event.preventDefault();
//         let keyword = searchbar.value;
//         searchbar.value = '';
//         searchGifs(keyword);
//     })
// })();

// </script> -->
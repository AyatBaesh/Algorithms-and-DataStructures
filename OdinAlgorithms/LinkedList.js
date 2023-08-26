class Node{
    constructor(data, next = null){
        this.data = data;
        this.next = next;
    }
}

class LinkedList{
    constructor(){
        this.head = null;
        this.size = 0;
    }
    prepend(data){
        this.head = new Node(data, this.head); 
        this.size++;    
    }
    append(data){
        let node = new Node(data);
        if(!this.head){
            this.head = node;
        }else{
            let current = this.head;
            while(current.next){
                current = current.next;
            }
            current.next = node;
        }   
        this.size++;    
    }
    insertAt(data, index){
        if(index > this.size){
            return;
        }
        if(index === 0){
            this.prepend(data);
            return;
        }
        let node = new Node(data);
        let current, previous;
        current = this.head;

        for(let i = 0; i < index; i++){
            previous = current;
            current = current.next;
        }
        node.next = current;
        previous.next = node;
        this.size++;
    }
    contains(data){
        let current = this.head;
        for(let i = 0; current; i++){
            if(current.data === data){
                console.log('node at index ' + i + ' contains the value you requested\n value is ' + current.data);
                return;
            }else{
                current = current.next;
            }
        }
    }
    pop(){
        let current = this.head;
        let previous;
        for(let i = 0; i < this.size - 1; i++){
            previous = current;
            current = current.next;
        }
        previous.next = current.next;

    }
    removeAtIndex(index){
        if(index < 0 || index > this.size){
            console.log('invalid index, please enter index from 0 to ' + this.size);
            return;
        }

        let current = this.head;
        if(index === 0){
            this.head = current.next;
        }
        let previous;
        for(let i = 0; i < index; i++){
            previous = current;
            current = current.next;
        }
        previous.next = current.next;
        this.size--;


    }
    printListData(){
        let current = this.head;
        while(current){
            console.log(current.data);
            current = current.next;
        }

    }
    getAtIndex(index){
        if(index < 0 || index > this.size){
            console.log('invalid index, please enter index from 0 to ' + this.size);
            return;
        }
        if(index === 0){
            return this.getHead();
        }
        if(index === this.size){
            return this.getTail();
        }
        let current = this.head;
        for(let i = 0; i < index; i++){
            current = current.next;
        }
        console.log(`node at index ${index} is ${current.data}`);
    }
    getSize(){
        console.log('size = ' + this.size);
    }
    getHead(){
        console.log('head node ' + this.head.data);
    }
    getTail(){
        let current = this.head;
        let previous;
        while(current){
            previous = current;
            current = current.next;
        }
        console.log('last node: ' + previous.data);
    }
    clear(){
        this.head = null;
        this.size = 0;
    }
    toString(){
        let current = this.head;
        let stringList = '';
        while(current){
            stringList+= current.data + ' -> ';
            current = current.next;
        }

        console.log(stringList += 'null');
    }
}

let ll = new LinkedList;
ll.append(100);
ll.append(200);
ll.append(300);
ll.append(400);
ll.append(500);
// ll.insertAt(500,2);
ll.printListData();
// ll.getHead();
// ll.getSize();
// ll.getTail();
// ll.getAtIndex(2);
// ll.contains(500);
ll.toString();
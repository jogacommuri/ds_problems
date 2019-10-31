/* Linked List */

function LinkedList(){
    var length = 0;
    var head = null;

    var Node = function(element){
        this.element = element;
        this.next  = null;
    }

    this.size = function(){
        return length;
    }
    this.head = function(){
        return head;
    }

    this.add = function(element){
        var node = new Node(element);
        if(head === null){
            head = node;
        }else{
            var currNode = head;
            while(currNode.next){
                currNode = currNode.next
            }
            currNode.next = node
        }
        length++;
    };


    this.remove = function(element){
        var currNode = head;
        var prevNode;
        if(currNode.element === element){
            head = currNode.next;
        }else{
            while(currNode.element !== element){
                prevNode = currNode;
                currNode = currNode.next;
            }
            prevNode.next = currNode.next;
        }
        length--;
    }

    this.isEmpty = function(){
        return length ===0;
    }

    this.indexOf = function(element){
        var currNode = head;
        var index = -1;
        while(currNode){
            index ++;
            if(currNode.element === element){
                return index;
            }
            currNode = currNode.next;
        }
        return -1;
    }

    this.elementAt = function(index){
        var currNode = head;
        var count = 0;

        while(count < index){
            count++;
            currNode = currNode.next;
        }
        return currNode.element;
    }

    this.addAt = function(index,element){
        var node =  new Node(element);

        var currNode = head
        var prevNode;
        var currentIndex = 0;

        if(index > length){
            return false;
        }
        if(index === 0){
            node.next = currNode;
            head = node;
        }else{
            while(currentIndex < index){
                currentIndex++;
                prevNode = currNode;
                currNode = currNode.next;
            }
            node.next = currNode;
            prevNode.next = node;
        }
        length++;
    }

    this.removeAt = function(index){
        var currNode = head;
        var prevNode;
        var currentIndex = 0;
        if(index < 0 && index >= length){
            return false;
        }
        if(index === 0){
            head = currNode.next;
        }else{
            while(currentIndex < index){
                currentIndex++;
                prevNode = currNode;
                currNode =  currNode.next;
            }
            prevNode.next = currNode.next;
        }
        length--;
        return currNode.element;
    }
}


console.log("--------- Linked List --------");
var conga = new LinkedList();
console.log(conga.size());
conga.add('Kitten');
conga.add('Puppy');
conga.add('Dog');
conga.add('Cat');
conga.add('Fish');
console.log(conga.size());
console.log(conga.removeAt(3));
console.log(conga.elementAt(3));
console.log(conga.indexOf('Puppy'));
console.log(conga.size());
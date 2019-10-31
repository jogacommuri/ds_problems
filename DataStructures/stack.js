//create stack
var Stack = function(){
    this.count = 0;
    this.storage = {};

    //push -- add a value to the end of the stack
    this.push = function(value){
        this.storage[this.count] = value;
        this.count++;
    }

    //pop--removes and returns the value at the top of the stack
    this.pop = function(value){
        if(this.count === 0){
            return undefined;
        }
        this.count--;

        var result = this.storage[this.count];
        delete this.storage[this.count];
        return result;
    }

    //size returns the size of the stack
    this.size = function(){
        return this.count;
    }
    //peek -- returns value at the end of the stack
    this.peek =  function(){
        return this.storage[this.count - 1 ];
    }

    this.showStack = function(){
       for( let i in this.storage){
        // console.log('================');
        console.log(this.storage[i]);
        // console.log('================');
        // let str += (this.storage[i] + '-->')
       }
    }
}

var myStack = new Stack();
myStack.push(8);
myStack.push(7);
myStack.push(6);
myStack.push(5);
myStack.push(4);
myStack.push(3);
myStack.push(2);
myStack.push(1);

console.log(myStack.peek())
console.log('================');
console.log(myStack.showStack())
console.log('================');
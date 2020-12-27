export class Heap {
  val: Array<number> = [];

  constructor() {
  }

  Index(i: number){
    return this.val[2*i+1];
  }

  rightChild(i: number){
    return this.val[2*i+2];
  }

  leftChildIndex(i: number){
    return 2*i+1<this.val.length?2*i+1:-1;
  }

  rightChildIndex(i: number){
    return 2*i+2<this.val.length?2*i+2:-1;
  }

  parentIndex(i: number){
    return (i-1)/2;
  }

  insert(num: number) {
    this.val.unshift(num); // add new at 0th ie root and percolate down
    this.percolateDown(0);
  }
  
  print() {
    console.log(this.val);
  }

  percolateDown(i: number): any {
    let l,r, max, temp;
    l= this.leftChildIndex(i);
    r= this.rightChildIndex(i);

    // find out if max is left/right child
    if(l!==-1&&this.val[l]>this.val[i]) {
      max = l;
    } else {
      max = i;
    }
    if(r!==-1&&this.val[r]>this.val[max]) {
      max = r;
    }
    // if max is not ith, then swap
    if(max !== i) {
      temp = this.val[i];
      this.val[i] = this.val[max];
      this.val[max] = temp;
      // proceed down
      this.percolateDown(max);
    }
  }

  delete(n: number) {
    // delete from array
    // then percolate down each element starting from root
  }

  heapsort () {
    // after the max heap is created
    // swap first(max) and last
    // remove last(max), print
    // heapify from root
    let i=0;
    while(i<this.val.length) {
      [this.val[0], this.val[this.val.length-1]] = [this.val[this.val.length-1], this.val[0]];
      console.log(this.val.pop());
      this.percolateDown(0);
    }
  }

  percolateUp(){
    // loop while data>parent data
    // in loop, swap data with parent
    // new index = parent data
    // continue above loop
  }

}

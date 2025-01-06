// median
class MedianFinder {
  constructor() {
      this.minHeap = [];
      this.maxHeap = [];
  }

  add(num) {
      if (!this.maxHeap.length || num <= this.maxHeap[0]) {
          this.maxHeap.unshift(num);
      } else {
          this.minHeap.push(num);
      }

      if (this.maxHeap.length > this.minHeap.length + 1) {
          this.minHeap.push(this.maxHeap.shift());
      } else if (this.minHeap.length > this.maxHeap.length) {
          this.maxHeap.unshift(this.minHeap.shift());
      }
  }

  getMedian() {
      if (this.maxHeap.length === this.minHeap.length) {
          return (this.maxHeap[0] + this.minHeap[0]) / 2;
      } else {
          return this.maxHeap[0];
      }
  }
}

var medianFinder = new MedianFinder();
console.log(medianFinder.getMedian()); 

medianFinder.add(6);
console.log(medianFinder.getMedian());

medianFinder.add(10);
console.log(medianFinder.getMedian()); 

medianFinder.add(2);
console.log(medianFinder.getMedian()); 

medianFinder.add(8);
console.log(medianFinder.getMedian()); 

medianFinder.add(4);
console.log(medianFinder.getMedian());

medianFinder.add(12);
console.log(medianFinder.getMedian()); 
// Maximum Frequency Stack


class FrequencyStack {
    constructor() {
      this.stack = [];
      this.freqMap = new Map();
    }
  
    push(val) {
      if (!this.freqMap.has(val)) {
        this.freqMap.set(val, 0);
      }
      this.freqMap.set(val, this.freqMap.get(val) + 1);
      this.stack.push(val);
    }
  
    pop() {
      while (this.stack.length > 0) {
        const val = this.stack.pop();
        this.freqMap.set(val, this.freqMap.get(val) - 1);
        if (this.freqMap.get(val) === 0) {
          delete this.freqMap.get(val);
        }
        return val;
      }
    }
  }
  
  
  const fs = new FrequencyStack();
  fs.push(5);
  fs.push(7);
  fs.push(5);
  fs.push(7);
  fs.push(4);
  fs.push(5);
  
  console.log(fs.pop()); 
  console.log(fs.pop()); 
  console.log(fs.pop()); 
  console.log(fs.pop()); 
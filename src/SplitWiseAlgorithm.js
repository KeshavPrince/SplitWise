class MaxHeap {
  constructor() {
    this.items = [];
  }

  size() {
    return this.items.length;
  }

  top() {
    if (this.items.length !== 0) return this.items[0];
    else return -1;
  }

  getParentOfIndex(idx) {
    return Math.floor((idx + 1) / 2 - 1);
  }

  getIndexOfLeftChild(idx) {
    return (idx + 1) * 2 - 1;
  }

  getIndexOfRightChild(idx) {
    return (idx + 1) * 2;
  }

  hasLeftChild(idx) {
    if (this.getIndexOfLeftChild(idx) < this.items.length) return true;
    else return false;
  }

  hasRightChild(idx) {
    if (this.getIndexOfRightChild(idx) < this.items.length) return true;
    else return false;
  }

  push(item) {
    let i = this.items.length;
    this.items.push(item);
    while (
      i > 0 &&
      this.items[this.getParentOfIndex(i)].amount < this.items[i].amount
    ) {
      let t = this.items[i];
      this.items[i] = this.items[this.getParentOfIndex(i)];
      this.items[this.getParentOfIndex(i)] = t;
      i = this.getParentOfIndex(i);
    }
  }

  pop() {
    if (this.items.length <= 1) return this.items.pop();
    const ret = this.items[0];
    this.items[0] = this.items.pop();
    let i = 0;
    while (true) {
      let highest, highestIdx;
      if (this.hasLeftChild(i)) {
        highestIdx = i;
        highest = this.items[this.getIndexOfLeftChild(i)].amount;
      } else break;
      if (this.hasRightChild(i)) {
        highest = Math.max(
          this.items[this.getIndexOfRightChild(i)].amount,
          highest
        );
        if(highest === this.items[this.getIndexOfRightChild(i)].amount) {
            highestIdx = this.getIndexOfRightChild(i);
        }
      }
      if (this.items[i].amount < this.items[highestIdx].amount) {
        let t = this.items[i];
        this.items[i] = this.items[highestIdx];
        this.items[highestIdx] = t;
        i = highestIdx;
      } else break;
    }
    return ret;
  }
}

export function splitWiseAlgorithm(graph) {
  let myMap = new Map();
  console.log(myMap.size)
  graph.forEach((element) => {
    console.log(element.from);
    console.log(element.to);
    if (myMap.has(element.from)) {
      let cur = myMap.get(element.from);
      cur += parseInt(element.amount);
      myMap.set(element.from, cur);
    } else {
      myMap.set(element.from, parseInt(element.amount));
    }
    if (myMap.has(element.to)) {
      let cur = myMap.get(element.to);
      cur -= parseInt(element.amount);
      myMap.set(element.to, cur);
    } else {
      myMap.set(element.to, -parseInt(element.amount));
    }
  console.log(myMap);
  });
  let givers = new MaxHeap();
  let takers = new MaxHeap();
  myMap.forEach((value, key) => {
    console.log(key);
    console.log(value);
    console.log(' ');
    if (value < 0) {
      givers.push({ amount: -value, label: key });
    console.log(givers.top());
    } else if (value > 0) {
      takers.push({ amount: value, label: key });
  console.log(takers.top());
    }
  });
  console.log(takers.top());
  let resultantGraph = [];
  while (givers.size()) {
    let curGiver = givers.top();
    givers.pop();
    let curTaker = takers.top();
    takers.pop();
    console.log('curGiver :');
    console.log(curGiver);
    console.log('curTaker :');
    console.log(curTaker);
    if (curGiver.amount >= curTaker.amount) {
      curGiver.amount -= curTaker.amount;
      resultantGraph.push({
        from: curGiver.label,
        to: curTaker.label,
        amount: curTaker.amount,
      });
      if (curGiver.amount > 0) {
        givers.push({ amount: curGiver.amount, label: curGiver.label });
      }
    } else {
      curTaker.amount -= curGiver.amount;
      resultantGraph.push({
        from: curGiver.label,
        to: curTaker.label,
        amount: curGiver.amount,
      });
      if (curTaker.amount > 0) {
        takers.push({ amount: curTaker.amount, label: curTaker.label });
      }
    }
  }
  console.log(resultantGraph);
  return resultantGraph;
}

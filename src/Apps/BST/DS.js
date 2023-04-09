function Node(data) {
  this.data = Number(data);
  this.left = null;
  this.right = null;
  this.nodeWidth = null;


  this.add = (num) => {
    var root = this;
    if (!this.data) {
      this.data = num;
      return;
    }
    var original = root;
    var cur = original;
    var par;
    while (cur) {
      par = cur;
      if (cur.data < num) {
        cur = cur.right;
      } else {
        cur = cur.left;
      }
    }
    if (par.data < num) {
      par.right = new Node(num);
    } else {
      par.left = new Node(num);
    }

    calculateWidth(root, 0);
    
  };

  
  var calculateWidth = (root, x) => {
      
      // [leftmost, rightmost]
      var l = root.left ?  calculateWidth(root.left, x - 1) : [x, x];
      var r = root.right ? calculateWidth(root.right, x + 1) : [x, x];
      root.nodeWidth = r[1] - l[0] + 1;
      return [l[0], r[1]];
  }

  var printable = [];
  this.printBST = () => {
    printable[0] = "";
    print(this.root, 0);
    console.log(printable[0]);
  };

  const print = (cur, depth) => {
    if (cur == null) return;
    print(cur.right, depth + 1);
    var str = "  ".repeat(depth) + cur.data;
    printable[0] += "\n" + str;
    print(cur.left, depth + 1);
  };
}

export default Node;

   //1.......
function Node(data) {
  this.data = data;
  this.next = null;
}

function LinkedList() {
  this.head = null;
  this.add = function (data) {
    const newNode = new Node(data);
    if (!this.head) {
      this.head = newNode;
    } else {
      let current = this.head;
      while (current.next) {
        current = current.next;
      }
      current.next = newNode;
    }
    };
    
  this.remove = function (data) {
    if (!this.head) {
      return;
    }
    if (this.head.data === data) {
      this.head = this.head.next;
      return;
    }
    let current = this.head;
    while (current.next) {
      if (current.next.data === data) {
        current.next = current.next.next;
        return;
      }
      current = current.next;
    }
    };
    
  this.print = function () {
    let current = this.head;
    let result = "LinkedList{";
    while (current) {
      result += current.data;
      if (current.next) {
        result += ",";
      }
      current = current.next;
    }
    result += "}";
    console.log(result);
  };
}

let linkedList = new LinkedList();
linkedList.add(1);
linkedList.add(2);
linkedList.add(3);
linkedList.print(); // Output: LinkedList{1,2,3}
linkedList.remove(2);
linkedList.print(); // Output: LinkedList{1,3}


//2....   

function Student(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.grades = [];

    this.inputNewGrade = function(newGrade) {
        this.grades.push(newGrade);
    };

   
    this.computeAverage = function() {
        if (this.grades.length === 0) {
            return 0;
        }
        const sum = this.grades.reduce((acc, curr) => acc + curr, 0);
        return sum / this.grades.length;
    };
}

function inputNewGrade(newGrade) {
    return function() {
        this.grades.push(newGrade);
    };
}

function computeAverage() {
    return function() {
        if (this.grades.length === 0) {
            return 0;
        }
        const sum = this.grades.reduce((acc, curr) => acc + curr, 0);
        return sum / this.grades.length;
    };
}

// Example usage
const student1 = new Student("Faniel", "Abraha");
student1.inputNewGrade = inputNewGrade(85);
student1.inputNewGrade();
student1.inputNewGrade(90);
student1.computeAverage = computeAverage();
console.log(student1.computeAverage()); 

const student2 = new Student("Sirak", "Zhgta");
student2.inputNewGrade = inputNewGrade(75);
student2.inputNewGrade();
student2.inputNewGrade(80);
student2.inputNewGrade(82);
student2.computeAverage = computeAverage();
console.log(student2.computeAverage());

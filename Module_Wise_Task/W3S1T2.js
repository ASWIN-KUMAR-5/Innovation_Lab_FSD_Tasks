// week 3 - session 1 - task 2

const student = {
  name: 'Aswin',
  age: 21,
  course: 'Computer Science',
  marks: {
    html: 85,
    css: 90,
    javascript: 88
  },

  // Method to display student info
  displayInfo: function () {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Course: ${this.course}`);
  },

  // Method to calculate average marks
  calculateAverage: function () {
    const total = this.marks.html + this.marks.css + this.marks.javascript;
    const avg = total / 3;
    console.log(`Average Marks: ${avg.toFixed(2)}`);
  }
};

// Display student info and average
console.log('Student Information:');
student.displayInfo();
student.calculateAverage();
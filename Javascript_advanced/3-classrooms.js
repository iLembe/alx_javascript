function createClassRoom(numbersOfStudents) {
    function studentSeat(seat) {
        return function() {
            return seat;
        };
    }

    var students = [];

    for (var i = 0; i < numbersOfStudents; i++) {
        students.push(studentSeat(i + 1));
    }

    return students;
}

var classRoom = createClassRoom(10);

// Example usage:
// console.log(classRoom[0]()); // This will display 1
// console.log(classRoom[9]()); // This will display 10


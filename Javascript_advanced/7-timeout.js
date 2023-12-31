console.log("Start of the execution queue");

setTimeout(function() {
    console.log("Final code block to be executed using setTimeout (with delay of 0)");
}, 0);

for (var i = 1; i <= 100; i++) {
    (function(iteration) {
        setTimeout(function() {
            console.log("Iteration number: " + iteration);
        }, 0);
    })(i);
}

console.log("End of the loop printing");


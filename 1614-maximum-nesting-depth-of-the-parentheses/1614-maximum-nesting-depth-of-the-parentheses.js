var maxDepth = function(s) {

    let current = 0;
    let max = 0;

    for (let char of s) {

        if (char === "(") {

            current++;

            if (current > max) {
                max = current;
            }

        } else if (char === ")") {

            current--;

        }
    }

    return max;
};
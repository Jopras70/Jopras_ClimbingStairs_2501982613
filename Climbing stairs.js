function max(n) {
    let max = -Infinity;
    for (let i = 0; i < n.length; i++) {
        if (max < n[i]) {
            max = n[i];
        }
    }
    return max;
}

function calcClimb(n, start, acc, max) {
    let dp = [];
    dp[start] = acc;
    let next = 0;
    if (n[start + 1] <= n[start + 2]) {
        if (n[start + 2] !== max) {
            //If 1step ahead is smaller than 2 step and 2 step ahead is not max
            dp[start + 1] = dp[start] + (n[start + 2] - n[start])
        } else {
            if (n[start + 2] !== n[n.length - 1]) {
                //If 1step ahead is smaller than 2 step, 2 step ahead is biggest number in array but is not the last element
                dp[start + 1] = dp[start] + (n[start + 2] - n[start])
            } else {
                //If 1step ahead is smaller than 2 step, 2 step ahead is biggest number in array and it is the last element
                dp[start + 1] = dp[start] + (n[start + 1] - n[start])
            }
        }
    }
    while (n[start + 2] !== max) {
        calcClimb(n, start + 2, dp[start + 1], max);
    }
    return dp[start + 1];
}
//case1:
//var n = [0, 2, 2, 1];

//case2:
//var n = [0, 2, 3, 2];

//case3:
//var n = [10, 15, 20];

//case4:
var n = [0, 0, 0, 0, 0, 0, 0];
var m = max(n);

var x = calcClimb(n, 0, n[0], m);
console.log(x);
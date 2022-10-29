// function problem1(pobi, crong) {
//     var answer = 1;

//     for (const page of pobi) {
//         for (const n of page) console.log("n :>> ", n);
//     }

//     return answer;
// }

// [99, 102], [211, 212];

// answer -1
function problem1(pobi = [99, 102], crong = [211, 212]) {
    let answer = 0;

    const [p왼쪽, p오른쪽] = pobi;
    const [c왼쪽, c오른쪽] = crong;

    if (p오른쪽 - p왼쪽 !== 1) return (answer = -1);
    if (c오른쪽 - c왼쪽 !== 1) return (answer = -1);

    const 계산기 = (arr) => {
        let 배열 = [];
        for (const page of arr) {
            let 더하기 = 0;
            let 곱하기 = 1;
            n = page.toString();
            for (let i = 0; i < n.length; i++) {
                더하기 += parseInt(n[i]);
                곱하기 *= parseInt(n[i]);
            }
            배열.push(더하기, 곱하기);
        }

        return Math.max(...배열);
    };

    const 포비 = 계산기(pobi);
    const 크롱 = 계산기(crong);

    if (포비 > 크롱) answer = 1;
    else if (크롱 < 포비) answer = 2;
    else if (포비 === 크롱) answer = 0;
    else answer = -1;

    return answer;
}

module.exports = problem1;

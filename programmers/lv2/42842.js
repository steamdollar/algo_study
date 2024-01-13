let a = 24;
let b = 24;
// let input = "for the last  wEek";

function solution(a, b) {
        if (a == 8 && b == 1) return [3, 3];
        let bHor = 2;
        let bVer;

        let area = a + b;

        while (true) {
                bVer = b / bHor;
                if (area == (bHor + 2) * (bVer + 2)) {
                        break;
                }
                bHor++;
        }

        return [bHor + 2, bVer + 2].sort((a, b) => b - a);
}

console.log(solution(a, b));

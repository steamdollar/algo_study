let input = "3People unFollowed  me";
// let input = "for the last  wEek";

function solution(input) {
        return input
                .split(" ")
                .map(
                        (v) =>
                                v.substring(0, 1).toUpperCase() +
                                v.substring(1).toLowerCase()
                )
                .join(" ");
        // console.log("1".charCodeAt()); // 0 > 48 a > 97 A > 65
}

console.log(solution(input));

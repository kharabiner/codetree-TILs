const fs = require('fs');
const input = fs.readFileSync('/dev/stdin').toString().trim().split('\n');

const [N, M] = input[0].split(' ').map(Number);
const edges = input.slice(1).map(line => line.split(' ').map(Number));

function countReachableNodes(N, M, edges) {
    // 그래프를 인접 리스트로 표현
    const graph = Array.from({ length: N + 1 }, () => []);
    for (const [x, y] of edges) {
        graph[x].push(y);
        graph[y].push(x);
    }

    // DFS를 위한 스택과 방문 여부를 체크할 배열
    const stack = [1];
    const visited = Array(N + 1).fill(false);
    visited[1] = true;
    let reachableCount = 0;

    while (stack.length > 0) {
        const node = stack.pop();
        for (const neighbor of graph[node]) {
            if (!visited[neighbor]) {
                visited[neighbor] = true;
                stack.push(neighbor);
                reachableCount++;
            }
        }
    }

    return reachableCount;
}

// 결과 출력
console.log(countReachableNodes(N, M, edges));
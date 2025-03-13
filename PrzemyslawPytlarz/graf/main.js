function findShortestPath() {

    let weightAB = parseInt(document.querySelector("#weightAB").value);
    let weightAC = parseInt(document.querySelector("#weightAC").value);
    let weightBC = parseInt(document.querySelector("#weightBC").value);

    if (isNaN(weightAB) || isNaN(weightAC) || isNaN(weightBC)) {
        document.querySelector("#result").innerHTML = "<span class='error'>Podaj wszytkie długości dróg!</span>";
        return;
    }

    let graph = {
        "A": { "B": weightAB, "C": weightAC },
        "B": { "A": weightAB, "C": weightBC },
        "C": { "A": weightAC, "B": weightBC }
    };

    let distances = { "A": 0, "B": Infinity, "C": Infinity };
    let predecessors = { "A": null, "B": null, "C": null };
    let unvisited = new Set(["A", "B", "C"]);

    while (unvisited.size > 0) {
        let current = Array.from(unvisited).reduce((a, b) => distances[a] < distances[b] ? a : b); // Najmniejszy wierzchołek z najmniejszym dystansem
        unvisited.delete(current);

        for (let neighbor in graph[current]) {
            let newDistance = distances[current] + graph[current][neighbor];
            if (newDistance < distances[neighbor]) {
                distances[neighbor] = newDistance;
                predecessors[neighbor] = current;
            }
        }
    }

    let path = [];
    let step = "B";
    while (step) {
        path.unshift(step);
        step = predecessors[step];
    }

    let result = `Najkrótsza droga z punktu A do B: <span class="path">${path.join(" -> ")}</span>\nKoszt: <span class="cost">${distances["B"]}</span>`;
    document.querySelector("#result").innerHTML = result;
}
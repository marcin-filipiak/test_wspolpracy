<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Shortest Path in a Graph</title>
</head>
<body>
    <h2>Find the Shortest Path</h2>
    
    <label>Enter weight A → B:</label>
    <input type="number" id="weightAB" min="1"><br><br>

    <label>Enter weight A → C:</label>
    <input type="number" id="weightAC" min="1"><br><br>

    <label>Enter weight B → C:</label>
    <input type="number" id="weightBC" min="1"><br><br>

    <button onclick="findShortestPath()">Calculate</button>

    <h3>Result:</h3>
    <p id="result"></p>

    <script>
        function findShortestPath() {
            // Get input values
            let weightAB = parseInt(document.getElementById("weightAB").value);
            let weightAC = parseInt(document.getElementById("weightAC").value);
            let weightBC = parseInt(document.getElementById("weightBC").value);

            if (isNaN(weightAB) || isNaN(weightAC) || isNaN(weightBC)) {
                document.getElementById("result").innerText = "Please enter all weights!";
                return;
            }

            // Graph representation
            let graph = {
                "A": { "B": weightAB, "C": weightAC },
                "B": { "A": weightAB, "C": weightBC },
                "C": { "A": weightAC, "B": weightBC }
            };

            // Dijkstra's algorithm
            let distances = { "A": 0, "B": Infinity, "C": Infinity };
            let predecessors = { "A": null, "B": null, "C": null };
            let unvisited = new Set(["A", "B", "C"]);

            while (unvisited.size > 0) {
                let current = Array.from(unvisited).reduce((a, b) => distances[a] < distances[b] ? a : b);
                unvisited.delete(current);

                for (let neighbor in graph[current]) {
                    let newDistance = distances[current] + graph[current][neighbor];
                    if (newDistance < distances[neighbor]) {
                        distances[neighbor] = newDistance;
                        predecessors[neighbor] = current;
                    }
                }
            }

            // Reconstruct path
            let path = [];
            let step = "B";
            while (step) {
                path.unshift(step);
                step = predecessors[step];
            }

            let result = `Shortest path from A to B: ${path.join(" -> ")}, cost: ${distances["B"]}`;
            document.getElementById("result").innerText = result;
        }
    </script>
</body>
</html>

<!DOCTYPE html>
<html lang="pl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Najkrótsza droga w grafie</title>
</head>
<body>
    <h2>Znajdź najkrótszą ścieżkę</h2>
    <label>Podaj wagę A → B:</label>
    <input type="number" id="ab" min="1"><br><br>

    <label>Podaj wagę A → C:</label>
    <input type="number" id="ac" min="1"><br><br>

    <label>Podaj wagę B → C:</label>
    <input type="number" id="bc" min="1"><br><br>

    <button onclick="znajdzNajkrotszaSciezke()">Oblicz</button>
    <h3>Wynik:</h3>
    <p id="wynik"></p>

    <script>
        function znajdzNajkrotszaSciezke() {
            // Pobranie wartości od użytkownika
            let wagaAB = parseInt(document.getElementById("ab").value);
            let wagaAC = parseInt(document.getElementById("ac").value);
            let wagaBC = parseInt(document.getElementById("bc").value);

            if (isNaN(wagaAB) || isNaN(wagaAC) || isNaN(wagaBC)) {
                document.getElementById("wynik").innerText = "Podaj wszystkie wagi!";
                return;
            }

            // Graf jako obiekt
            let graf = {
                "A": { "B": wagaAB, "C": wagaAC },
                "B": { "A": wagaAB, "C": wagaBC },
                "C": { "A": wagaAC, "B": wagaBC }
            };

            // Algorytm Dijkstry
            let dystanse = { "A": 0, "B": Infinity, "C": Infinity };
            let poprzednicy = { "A": null, "B": null, "C": null };
            let nieodwiedzone = new Set(["A", "B", "C"]);

            while (nieodwiedzone.size > 0) {
                let aktualny = Array.from(nieodwiedzone).reduce((a, b) => dystanse[a] < dystanse[b] ? a : b);
                nieodwiedzone.delete(aktualny);

                for (let sasiad in graf[aktualny]) {
                    let nowaOdleglosc = dystanse[aktualny] + graf[aktualny][sasiad];
                    if (nowaOdleglosc < dystanse[sasiad]) {
                        dystanse[sasiad] = nowaOdleglosc;
                        poprzednicy[sasiad] = aktualny;
                    }
                }
            }

            // Odtworzenie ścieżki
            let sciezka = [];
            let krok = "B";
            while (krok) {
                sciezka.unshift(krok);
                krok = poprzednicy[krok];
            }

            let wynik = `Najkrótsza droga z A do B: ${sciezka.join(" -> ")}, koszt: ${dystanse["B"]}`;
            document.getElementById("wynik").innerText = wynik;
        }
    </script>
</body>
</html>

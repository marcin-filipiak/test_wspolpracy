# Aplikacja do symulacji żeglowania

## Opis Projektu
Aplikacja umożliwia symulację podstawowych zasad żeglowania, uwzględniając wpływ kierunku wiatru na ruch łódki. ```czy kierunek wiatru wpływa na ruch łódki, czy steruje nią użytkownik?```
Użytkownik może kontrolować kierunek łódki, ustawiać wiatr ```założenia nieprzewidywały zmiany kierunku wiatru przez użytkownika``` oraz obserwować zmiany w zachowaniu żagli i pozycji jednostki. 
Projekt wizualizuje kluczowe mechanizmy, takie jak "martwa strefa" (uniemożliwiająca ruch pod wiatr) oraz dostosowanie żagli do kąta względem wiatru.

---

## Główne Funkcjonalności
### 1. **Sterowanie Łódką**
- **Przyciski "Lewo" i "Prawo"** – pozwalają na skręcanie łódki o 15° w lewo lub prawo. ```czy łódka skręca tylko o 15 stopni w lewo lub prawo?```
- **Przycisk "Start/Stop"** – uruchamia lub zatrzymuje ruch łódki. Automatycznie blokuje ruch, jeśli łódka próbuje płynąć pod wiatr. ```w założeniach nie było takiego przycisku```

### 2. **Kontrola Wiatru**
- **Pole tekstowe i przycisk "Ustaw wiatr"** – umożliwiają wprowadzenie dowolnego kąta wiatru (w stopniach). Wiatr jest wizualizowany jako biała linia w górnej części ekranu. ```ok ale nie było tego w założeniach```

### 3. **Wizualizacja**
- **Zmiana żagli** – trzy stany żagli:
  - `no_sail.png` – żagle złożone (łódka nie może płynąć). ```ok ale w założeniach nie było nic o składaniu żagli```
  - `sail_center.png` – żagle ustawione neutralnie (kąt 45°–90° względem wiatru). ```ten kąt nie jest neutralny, łódka bez problemu płynie```
  - `sail_left.png`/`sail_right.png` – żagle ustawione w zależności od kierunku wiatru (kąt >90°).

 ```jest mowa o trzech stanach żagli a są cztery obrazki```
    
- **Wskaźnik wiatru** – biała strzałka wskazująca aktualny kierunek wiatru.

### 4. **Monitorowanie Statusu**
- **Etykieta statusu** – wyświetla:
  - Aktualny kąt łódki.
  - Kierunek wiatru.
  - Informację o stanie ruchu (włączony/wyłączony). ```w założeniach nie było```

---

## Zasady Działania
### Mechanika Ruchu
- Łódka porusza się tylko wtedy, gdy jej kierunek **nie znajduje się w "martwej strefie"** (45° w obie strony od kierunku wiatru). ```sporo. 45 w obie strony to 90 stopni. Podczas, gdy https://www.wind.net.pl/images/design/pdf/zeglarz-jachtowy-materialy-wind.pdf podaje pole martwe między 30 a 60, czyli 15 do 30 na każdą ze stron```
- Próba uruchomienia ruchu w "martwej strefie" wyświetla komunikat błędu. ```dlaczego?```
- Pozycja łódki jest aktualizowana w czasie rzeczywistym z uwzględnieniem ograniczeń ekranu (łódka nie wypływa poza granice).

### Zależność Żagli od Wiatru
- **Kąt względem wiatru** – obliczany jest jako różnica między kierunkiem łódki a wiatrem.
- Żagle automatycznie dostosowują się do tej różnicy:
  - **<45°** – żagle złożone (brak ruchu). ```ah! więc chodzi tu nie o złożone a w łopocie```
  - **45°–90°** – żagle ustawione centralnie. ```centralnie? może chodziło o ustawienie z osią wzdłużną jachtu?```
  - **>90°** – żagle ustawione w lewo lub prawo (w zależności od strony wiatru). ```ok piszemy w lewo, prawo ale od czego? to zależy jak ktoś patrzy, może nazwy burt zastosować?```

### Ograniczenia Techniczne
- Łódka porusza się ze stałą prędkością. ```chwila, przy kącie <45 stopni była informacja, że jest brak ruchu czyli 0. A tu, że ma stałą prędkość czyli pewnie >0```
- Ekran ma stałe granice obliczane na podstawie rozdzielczości urządzenia.

---

## Interfejs Użytkownika
- **Górna część ekranu** – obszar wizualizacji łódki i wiatru (niebieskie tło).
- **Dolna część ekranu** – panel sterowania z przyciskami, polem tekstowym i statusem.
- **Przejrzysty układ** – podział na trzy kolumny dla intuicyjnej nawigacji.

---

## Wymagane Zasoby
Aplikacja wykorzystuje obrazy żagli:
- `no_sail.png` – brak żagli.
- `sail_center.png` – żagle neutralne.
- `sail_left.png`/`sail_right.png` – żagle ustawione w lewo/prawo.

## Przykłady Użycia

### 1. Sterowanie Łódką
Przykładowo, aby skręcić łódkę w lewo o 30°:
1. Kliknij przycisk "Lewo" dwa razy.
2. Łódka skręci o 30° w lewo.

```ok jasne```

### 2. Ustawianie Kierunku Wiatru
Aby ustawić wiatr na 90°:
1. Wprowadź wartość "90" w polu tekstowym obok przycisku "Set Wind".
2. Kliknij przycisk "Set Wind".
3. Wiatr zostanie ustawiony na 90°, a jego kierunek zostanie wyświetlony jako biała linia na ekranie.

```ok ale nie mieliśmy takiej funkcjonalności w założeniach```

### 3. Start i Stop Ruchu Łódki
Aby rozpocząć ruch łódki:
1. Upewnij się, że kąt łódki nie znajduje się w "martwej strefie".
2. Kliknij przycisk "Start".
3. Łódka zacznie się poruszać zgodnie z kierunkiem wiatru. ```czy to oznacza że jeśli wiatr wieje z zachodu, to będziemy tylko płynąć na wschód? to po co ster?```

```to ta łódź jest motorowa czy żaglowa? ;-)```

### 4. Zmiana Żagli
Aby zmienić ustawienie żagli na lewo:
1. Ustaw kierunek łódki na >90° względem wiatru.
2. Żagle automatycznie ustawią się w lewo.

```brzmi to jak instrukcja obsługi a ja nie wiem jak to zaprogramować```

### 5. Monitorowanie Statusu
Aby sprawdzić bieżący status łódki:
1. Spójrz na etykietę statusu.
2. Wyświetli ona aktualny kąt łódki, kierunek wiatru oraz informację o stanie ruchu.

```to też jakiś wyrywek instrukcji obsługi, dobrze wiedzieć, że jak spojrzę to zobaczę, natomiast chciałbym wiedzieć jak to obliczyć ;-)```

# WindSail

## 1. Wstęp

**WindSail** to aplikacja symulacyjna dostępna na przeglądarki internetowe, pozwalająca na sterowanie wirtualną łodzią żaglową. Głównym celem projektu jest realistyczne odwzorowanie interakcji między wiatrem, żaglami i sterem, umożliwiając użytkownikowi naukę podstawowych zasad żeglarstwa.

### Kluczowe funkcjonalności:
- Generowanie losowego kierunku i siły wiatru.
- Ustawianie żagli w zależności od kierunku wiatru i kursu łodzi.
- Sterowanie kursem łodzi poprzez wychylenie steru.
- Dynamiczna zmiana grafiki łodzi w zależności od jej ustawienia względem wiatru.
- Kompas pokazujący kierunek wiatru.

---

## 2. Funkcjonalności

### 2.1. Symulacja wiatru
- Wiatr generowany jest losowo po naciśnięciu przycisku "Zmień wiatr".
- Kierunek wiatru wyrażony w stopniach (0-360°).
- Siła wiatru losowana w zakresie 5-15 kt.
- Wiatr wpływa na prędkość i możliwości sterowania łodzią.

### 2.2. Ustawienie żagli
- Żagle dostosowują się do kursu łodzi w stosunku do wiatru.
- Przy kursie w linii wiatru (tzw. "z wiatrem") łódź może poruszać się ze zbliżoną prędkością do siły wiatru.
- Przy kursach na wiatr (żygzakowanie) łódź może płynąć, ale wymaga optymalnego ustawienia żagli.

### 2.3. Sterowanie łodzią
- Użytkownik steruje łodzią za pomocą suwaka.
- Maksymalny wychył steru wynosi -30° do 30°.
- Po puszczeniu ster wraca do pozycji neutralnej.
- Obrót łodzi zależy od prędkości i aktualnego kursu.

### 2.4. Grafika i interfejs
- Łódź zmienia swoje położenie w przestrzeni.
- Kompas na ekranie wskazuje kierunek wiatru.
- Prędkość łodzi wyświetlana na ekranie.
- Interaktywne elementy sterowania.

---

## 3. Interfejs użytkownika

### 3.1. Ekran główny
- Widok łodzi na wodzie.
- Kompas pokazujący kierunek wiatru.
- Suwak steru do kontrolowania kursu.
- Przycisk do losowej zmiany kierunku wiatru.

---

## 4. Algorytmy i logika aplikacji

### 4.1. Generowanie wiatru
- Kierunek: losowa wartość od 0 do 360°.
- Siła: losowa wartość od 5 do 15 kt.
- Wiatr zmienia się po naciśnięciu przycisku.

### 4.2. Obliczanie ustawienia żagli
- Kąt żagli zależny od kąta między kierunkiem wiatru a kursem łodzi.
- Efektywność żagli obliczana na podstawie kąta natarcia wiatru.

### 4.3. Sterowanie łodzią
- Zmiana kursu zależna od wychylenia steru.
- Im większa prędkość, tym mocniejszy efekt skrętu.

### 4.4. Zmiana grafiki łodzi
- Grafika łodzi obracana zależnie od kursu.
- Żagle zmieniają ustawienie wraz z kursem.

---

## 5. Przypadki użycia

### 5.1. Zmiana kursu łodzi
**Opis:**
Użytkownik steruje łodzią, zmieniając jej kurs.

**Kroki:**
1. Użytkownik przesuwa suwak steru.
2. Łódź obraca się w odpowiednim kierunku.
3. Żagle automatycznie dostosowują się do nowego kursu.

**Oczekiwany wynik:**
Łódź zmienia kurs i kontynuuje płynięcie.

### 5.2. Zmiana kierunku wiatru
**Opis:**
Użytkownik zmienia warunki pogodowe.

**Kroki:**
1. Użytkownik naciska "Zmień wiatr".
2. Nowe wartości wiatru są generowane.
3. Żagle dostosowują się do nowej sytuacji.

**Oczekiwany wynik:**
Zmiana kierunku wiatru wpływa na prędkość i kurs łodzi.

---

## 6. Technologie
- Język: JavaScript
- Renderowanie: Canvas
- Obsługa interakcji: HTML, CSS

---

## 7. Możliwości rozwoju
- Tryb multiplayer.
- Dynamiczna pogoda.
- Zapis historii kursu.

---

## 8. Podsumowanie
Aplikacja **WindSail** dostarcza interaktywnej symulacji żeglarstwa, oferując proste sterowanie łodzią i reakcję na zmienne warunki pogodowe.


# WindSail

## 1. Wstęp

**WindSail** to mobilno-webowa aplikacja symulacyjna, umożliwiająca użytkownikowi sterowanie wirtualną łodzią żaglową. Kluczowym elementem aplikacji jest interakcja z wiatrem, który wieje losowo z różnych kierunków, a żagle automatycznie ustawiają się, aby efektywnie wykorzystać siłę wiatru i umożliwić płynięcie z wiatrem.

### Kluczowe funkcjonalności:
- Generowanie losowego kierunku wiatru.
- Automatyczne ustawianie żagli w zależności od wiatru.
- Ręczne sterowanie kursem łodzi przez użytkownika.
- Dynamiczna zmiana grafiki łodzi w zależności od ustawień żagli i kursu.

---

## 2. Funkcjonalności

### 2.1. Symulacja wiatru
- Wiatr generowany jest losowo co określony czas (np. co 5 sekund).
- Kierunek wiatru wyrażony w stopniach (0-360°).
- Opcjonalnie: siła wiatru wpływająca na prędkość łodzi.

### 2.2. Automatyczne ustawienie żagli
- Żagle dostosowują się do kierunku wiatru w taki sposób, aby łódź mogła płynąć z wiatrem.
- W zależności od kursu łodzi względem wiatru, system wybiera odpowiednią konfigurację żagli.

### 2.3. Sterowanie łodzią
- Użytkownik steruje łodzią za pomocą elementów interfejsu (np. koło sterowe lub suwak).
- Kurs łodzi jest aktualizowany zgodnie z działaniami użytkownika.
- System przelicza efektywność żagli w odniesieniu do nowego kursu.

### 2.4. Dynamiczna grafika łodzi
- Aplikacja zmienia grafikę łodzi w zależności od ustawienia żagli i kursu względem wiatru.
- Różne warianty graficzne dla kursów pod wiatr i z wiatrem.

---

## 3. Interfejs użytkownika

### 3.1. Ekran główny
- Wizualizacja łodzi na wodzie.
- Kompas wskazujący aktualny kierunek wiatru.
- Prędkościomierz pokazujący prędkość łodzi.
- Sterowanie łodzią (koło sterowe lub suwaki).

### 3.2. Menu ustawień
- Możliwość ustawienia siły i częstotliwości zmian wiatru.
- Opcja włączenia trybu realistycznej symulacji.
- Resetowanie ustawień do domyślnych wartości.

---

## 4. Algorytmy i logika aplikacji

### 4.1. Generowanie wiatru

Wiatr generowany losowo w określonych odstępach czasowych.

### 4.2. Obliczanie ustawienia żagli

W zależności od kursu łodzi względem wiatru ustawiane są żagle.

### 4.3. Sterowanie łodzią

Aktualizacja kursu łodzi na podstawie danych użytkownika.

### 4.4. Zmiana grafiki łodzi

Aplikacja wybiera odpowiednią grafikę łodzi w zależności od kursu i ustawienia żagli.

---

## 5. Przypadki użycia

### 5.1. Przypadek 1: Podstawowe sterowanie łodzią

Opis:
Użytkownik chce ręcznie zmienić kurs łodzi i obserwować, jak zmienia się ustawienie żagli.

Kroki:

- Użytkownik uruchamia aplikację.
- Zmienia kurs łodzi za pomocą wirtualnego steru.
- Żagle automatycznie dostosowują się do nowego kierunku wiatru.
- Na ekranie zmienia się grafika łodzi.

##### Oczekiwany wynik:
Łódź płynie w nowym kierunku, a grafika żagli odpowiada rzeczywistym ustawieniom.

### 5.2. Przypadek 2: Zmiana kierunku wiatru

Opis:
Użytkownik chce zobaczyć, jak aplikacja reaguje na zmianę wiatru.

Kroki:

- Użytkownik obserwuje ekran kompasu.
- Wiatr zmienia kierunek po kilku sekundach.
- Żagle dostosowują się automatycznie.
- Użytkownik dostosowuje kurs, aby dostosować się do nowego kierunku wiatru.

##### Oczekiwany wynik:
Łódź automatycznie dostosowuje się do zmiany wiatru, a użytkownik może kontrolować jej kurs.

### 5.3. Przypadek 3: Tryb manualny i automatyczny

Opis:
Użytkownik chce przetestować różnice między sterowaniem ręcznym a automatycznym ustawieniem żagli.

Kroki:

- Użytkownik przełącza aplikację w tryb manualny.
- Ręcznie ustawia żagle przy danym kursie.
- Porównuje wyniki z automatycznym dostosowaniem.

##### Oczekiwany wynik:
W trybie automatycznym aplikacja lepiej wykorzystuje wiatr, podczas gdy w trybie manualnym użytkownik musi kontrolować ustawienie żagli ręcznie.

---

## 6. Technologie

- Język programowania: JavaScript
- Silnik graficzny: Canvas / WebGL
- Platformy docelowe: Android, iOS, Web

---

## 7. Możliwości rozwoju

- Tryb multiplayer do wspólnej żeglugi z innymi użytkownikami.
- Integracja z mapami i rzeczywistymi danymi pogodowymi.
- System osiągnięć i misji.

---

## 8. Podsumowanie

Aplikacja **WindSail** oferuje realistyczne doświadczenie żeglarskie, łącząc automatyczne ustawienie żagli, dynamiczny wiatr oraz interaktywne sterowanie.

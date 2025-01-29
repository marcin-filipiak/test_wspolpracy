# WindSail

## 1. Wstęp

**WindSail** to mobilno-webowa aplikacja symulacyjna, umożliwiająca użytkownikowi sterowanie wirtualną łodzią żaglową. Kluczowym elementem aplikacji jest interakcja z wiatrem, który wieje losowo z różnych kierunków, a żagle automatycznie ustawiają się, aby efektywnie wykorzystać siłę wiatru i umożliwić płynięcie z wiatrem. ```płynięcie z wiatrem oznacza możliwość poruszania się tylko w jednym kierunku, to nie jest prawda```

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
- Opcjonalnie: siła wiatru wpływająca na prędkość łodzi. ```jak to obliczać?```

### 2.2. Automatyczne ustawienie żagli
- Żagle dostosowują się do kierunku wiatru w taki sposób, aby łódź mogła płynąć z wiatrem. ```chyba nie mogę się z tym zgodzić...```
- W zależności od kursu łodzi względem wiatru, system wybiera odpowiednią konfigurację żagli. ```w jaki sposób to robi?```

### 2.3. Sterowanie łodzią
- Użytkownik steruje łodzią za pomocą elementów interfejsu (np. koło sterowe lub suwak). ```ok chociaż w założeniach było tylko prawo/lewo```
- Kurs łodzi jest aktualizowany zgodnie z działaniami użytkownika. 
- System przelicza efektywność żagli w odniesieniu do nowego kursu. ```w jaki sposób?```

### 2.4. Dynamiczna grafika łodzi
- Aplikacja zmienia grafikę łodzi w zależności od ustawienia żagli i kursu względem wiatru.
- Różne warianty graficzne dla kursów pod wiatr i z wiatrem. ```w punkcie 2.2 była mowa, że żagle są dostosowywane tak, by łódź mogła płynąć z wiatrem, a tu mowa o pływaniu pod wiatr...```

---

## 3. Interfejs użytkownika

### 3.1. Ekran główny
- Wizualizacja łodzi na wodzie.
- Kompas wskazujący aktualny kierunek wiatru.
- Prędkościomierz pokazujący prędkość łodzi. ```nie mieliśmy tego w założeniach ale miło...```
- Sterowanie łodzią (koło sterowe lub suwaki). ```w założeniach było prawo/lewo bez stopniowania ile w prawo lub w lewo```

### 3.2. Menu ustawień
- Możliwość ustawienia siły i częstotliwości zmian wiatru. 
- Opcja włączenia trybu realistycznej symulacji. ```a co to takiego?```
- Resetowanie ustawień do domyślnych wartości. ```znaczy jakich? i co jest resetowane?```

---

## 4. Algorytmy i logika aplikacji

### 4.1. Generowanie wiatru

Wiatr generowany losowo w określonych odstępach czasowych. ```jakie wartości są generowane, w jakich odstępach (sekundy, minuty, godziny)```

### 4.2. Obliczanie ustawienia żagli

W zależności od kursu łodzi względem wiatru ustawiane są żagle. ```ale jak?```

### 4.3. Sterowanie łodzią

Aktualizacja kursu łodzi na podstawie danych użytkownika. ```jak? jakich danych```

### 4.4. Zmiana grafiki łodzi

Aplikacja wybiera odpowiednią grafikę łodzi w zależności od kursu i ustawienia żagli. ```jaka grafika dla jakiego kursu i ustawienia żagli? czy grafika zalezy od kursu czy od kierunku wiatru?``` 

---

## 5. Przypadki użycia

### 5.1. Przypadek 1: Podstawowe sterowanie łodzią

Opis:
Użytkownik chce ręcznie zmienić kurs łodzi i obserwować, jak zmienia się ustawienie żagli.

Kroki:

- Użytkownik uruchamia aplikację. ```czyli za każdym razem by zmienić kurs łodzi muszę uruchamiać aplikację?``` 
- Zmienia kurs łodzi za pomocą wirtualnego steru.
- Żagle automatycznie dostosowują się do nowego kierunku wiatru.
- Na ekranie zmienia się grafika łodzi.



##### Oczekiwany wynik:
Łódź płynie w nowym kierunku, a grafika żagli odpowiada rzeczywistym ustawieniom.

### 5.2. Przypadek 2: Zmiana kierunku wiatru

Opis:
Użytkownik chce zobaczyć, jak aplikacja reaguje na zmianę wiatru. ```też jestem ciekaw, może aplikacja się zawiesza... ;-P```

Kroki:

- Użytkownik obserwuje ekran kompasu. ```w jaki sposób zmusisz użytkownika do obserwowania ekranu kompasu? Czy będzie tu śledzenie gałek ocznych?```
- Wiatr zmienia kierunek po kilku sekundach.
- Żagle dostosowują się automatycznie. ```nadal nie wiem jak```
- Użytkownik dostosowuje kurs, aby dostosować się do nowego kierunku wiatru.

##### Oczekiwany wynik:
Łódź automatycznie dostosowuje się do zmiany wiatru, a użytkownik może kontrolować jej kurs. ```nie mam pojęcia jak osiągnąć ten wynik```

### 5.3. Przypadek 3: Tryb manualny i automatyczny

Opis:
Użytkownik chce przetestować różnice między sterowaniem ręcznym a automatycznym ustawieniem żagli. ```nie komentuje bo nie mieliśmy takiej funkcjonalności w założeniach```

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
```skoro jest automatyczne ustawianie żagli to raczej mało realistyczne doświadczenia żeglarskie ;-)```

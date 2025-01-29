# Specyfikacja funkcjonalna gry mobilnej/desktopowej Sailor

## 1. Wstęp
Dokument opisuje wymagania funkcjonalne dla gry mobilnej/desktopowej Sailor. Przeznaczony jest dla zespołu programistów, którzy na jego podstawie mają zaimplementować oprogramowanie.

## 2. Cel systemu
Gra Sailor ma umożliwiać użytkownikom umożliwić sterowanie żaglówką dostosowując się do aktualnego wiatru.

## 3. Zakres funkcjonalny
System będzie składał się z następujących modułów:
- **Moduł A** – odpowiedzialny za wyświetlanie aktualnego stanu gry.
- **Moduł B** – odpowiedzialny za pobieranie sygnałów wejściowych od użytkownika.
- **Moduł C** – odpowiedzialny za dynamicznie zmieniający się kierunek wiatru i kalkulację poruszania się łódki.

## 4. Wymagania funkcjonalne
### 4.1. Moduł A
**Opis:**
Składa się z planszy, na której znajdują się następujące elementy:
- Żaglówka, będąca pod kontrolą gracza.
- Porty, które są celem gracza.
**Dane wejściowe:**
    Sygnał z modułu C o potrzebie zmiany stanu gry.
**Dane wyjściowe:**
    Zmiana stanu gry(obrót żagla, a w konsekwencji zmiana ruchu łódki).
### 4.2. Moduł B
**Opis:**
Składa się z dwóch przycisków.

**Dane wejściowe:**
Sygnał wejściowy użytkownika (wciśnięcie jednego z przycisków)
**Dane wyjściowe:**
Powiadomienie modułu C o zaistniałych zmianach.
### 4.3. Moduł C
**Opis:**
Przetwarza input użytkownika i wiatr na faktyczny ruch łódki.

**Dane wejściowe:**
Sygnał z modułu B o inpucie użytkownika.
**Dane wyjściowe:**
Powiadomienie modułu A o zaistniałych zmianach.

## 5. Przypadki użycia
### Przypadek 1: Wciśnięcie przez użytkownika przycisku do skrętu w prawo.
**Aktorzy:**
- Użytkownik systemu

**Opis:**
1. Użytkownik uruchamia aplikację jeśli jeszcze nie jest uruchomiona.
1. Użytkownik wciska przycisk do skrętu w prawo.
1. Moduł B wysyła sygnał do moduły C z informacją o wcviśnięciu przycisku do skrętu w prawo.
1. Moduł C rekalkuluje poruszanie się żaglówki i wysyła sygnał do modułu A.
1. Moduł A wyświetla zmiany w stanie gry.
2. 
### Przypadek 2: Wciśnięcie przez użytkownika przycisku do skrętu w lewo.
**Aktorzy:**
- Użytkownik systemu

**Opis:**
1. Użytkownik uruchamia aplikację jeśli jeszcze nie jest uruchomiona.
1. Użytkownik wciska przycisk do skrętu w lewo.
1. Moduł B wysyła sygnał do moduły C z informacją o wcviśnięciu przycisku do skrętu w lewo.
1. Moduł C rekalkuluje poruszanie się żaglówki i wysyła sygnał do modułu A.
1. Moduł A wyświetla zmiany w stanie gry.

## 6. Wymagania niefunkcjonalne
- Aplikacja działa w min. 20 klatkach na sekundę

## 7. Technologie i ograniczenia
- Platforma: .NET 9
- Framework: .NET MAUI

## 8. Inne uwagi
- Aplikacja powinna korzystać z podejścia OOP w celu ułatwienia dalszej rozbudowy.

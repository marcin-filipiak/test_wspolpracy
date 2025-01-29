# Specyfikacja funkcjonalna aplikacji symulującej pływanie łódką

## 1. Wprowadzenie
Dokument opisuje wymagania funkcjonalne dla aplikacji symulującej pływanie łódką. Przeznaczony jest dla zespołu programistów, którzy na jego podstawie mają zaimplementować oprogramowanie.

## 2. Cel aplikacji
Aplikacja to program stworzony w .NET MAUI, który symuluje pływanie łódki po ekranie w zależności od losowanego kierunku wiatru. Użytkownik może sterować łódką, obracając ją w lewo lub w prawo za pomocą strzałek.

## 3. Zakres funkcjonalny
System będzie składał się z następujących modułów:
- **Moduł A – Symulacja wiatru** – odpowiedzialny za losowanie kierunku wiatru (bajdewind i inne kierunki żeglarskie). ```oj nie! to się nie losuje!!! to wiatr jaki wieje względem ustawienia do niego łódki```
- **Moduł B – Sterowanie łódką** – umożliwia użytkownikowi obracanie łódki w lewo i w prawo o 15 stopni. ```tylko o 15 stopni czy ze skokoiem 15 stopni?```
- **Moduł C – Ruch łódki** – oblicza i aktualizuje położenie łódki w zależności od kierunku wiatru.
- 
## 4. Wymagania funkcjonalne
### 4.1. Moduł A – Symulacja wiatru
**Opis:**
- Funkcja 1: Losowanie kierunku wiatru (bajdewind oraz inne kierunki żeglarskie).
- Funkcja 2: Aktualizacja wartości kierunku wiatru w czasie rzeczywistym.

**Dane wejściowe:**
- Brak (losowanie odbywa się automatycznie).

**Dane wyjściowe:**
- Aktualny kierunek wiatru.

### 4.2. Moduł B – Sterowanie łódką
**Opis:**
- Funkcja 1: Obracanie łódki w lewo po naciśnięciu odpowiedniego przycisku.
- Funkcja 2: Obracanie łódki w prawo po naciśnięciu odpowiedniego przycisku.

**Dane wejściowe:**
- Interakcja użytkownika za pomocą strzałek (lewo, prawo).

**Dane wyjściowe:**
- Aktualny kąt obrotu łódki.

### 4.3. Moduł C – Ruch łódki
**Opis:**
- Funkcja 1: Obliczanie prędkości i kierunku ruchu łódki na podstawie kierunku wiatru i pozycji łódki.
- Funkcja 2: Aktualizacja położenia łódki na ekranie.

**Dane wejściowe:**
- Aktualny kierunek wiatru.
- Aktualny kąt obrotu łódki.

**Dane wyjściowe:**
- Nowe współrzędne łódki na ekranie.

## 5. Przypadki użycia
### Przypadek 1: Losowanie kierunku wiatru
**Aktorzy:**
- System

**Opis:**
1. System losuje kierunek wiatru.
2. Wartość kierunku jest aktualizowana i wyświetlana na ekranie.

**Dane wejściowe:**
- Brak

**Dane wyjściowe:**
- Nowy kierunek wiatru

### Przypadek 2: Obrót łódki
**Aktorzy:**
- Użytkownik

**Opis:**
1. Użytkownik naciska strzałkę w lewo lub w prawo.
2. System aktualizuje kąt obrotu łódki.
3. Nowa pozycja łódki jest obliczana.

**Dane wejściowe:**
- Naciśnięcie strzałki w lewo lub w prawo.

**Dane wyjściowe:**
- Nowy kąt obrotu łódki.

### Przypadek 3: Ruch łódki
**Aktorzy:**
- System

**Opis:**
1. System analizuje kierunek wiatru i kąt obrotu łódki.
2. Aktualizuje położenie łódki na ekranie.

**Dane wejściowe:**
- Aktualny kierunek wiatru.
- Aktualny kąt obrotu łódki.

**Dane wyjściowe:**
- Nowe współrzędne łódki na ekranie.

## 6. Interfejsy API
Nie dotyczy – aplikacja działa lokalnie na urządzeniu.

## 7. Wymagania niefunkcjonalne
- System powinien działać płynnie na urządzeniach mobilnych i desktopowych obsługujących .NET MAUI.

## 8. Technologie i ograniczenia
- Platforma: .NET MAUI
- Obsługa gestów i interakcji dotykowych

## 9. Wymagania dotyczące bezpieczeństwa
- Brak szczególnych wymagań bezpieczeństwa – aplikacja działa lokalnie.

## 10. Inne uwagi
- Możliwość przyszłej rozbudowy o dodatkowe funkcje, takie jak różne typy jednostek pływających czy warunki pogodowe.

# Dokumentacja aplikacji mobilnej BoatApp: **Symulator Łódki**

---

## Spis treści
1. [Opis projektu](#1-opis-projektu)
2. [Wymagania funkcjonalne](#2-wymagania-funkcjonalne)
3. [Wymagania techniczne](#3-wymagania-techniczne)
4. [Architektura aplikacji](#4-architektura-aplikacji)
5. [Mechanika gry](#5-mechanika-gry)
6. [Elementy graficzne](#6-elementy-graficzne)
7. [Przyszłe usprawnienia](#7-przyszłe-usprawnienia)

---

## 1. **Opis projektu**
Gra mobilna w technologii .NET MAUI, która symuluje sterowanie łódką. Użytkownik kontroluje łódkę za pomocą strzałek na klawiaturze lub przycisków ekranowych. Wiatr, losowo generowany w różnych kierunkach, wpływa na łódkę, zmuszając gracza do dostosowania sterowania, aby zachować kurs. Gra wykorzystuje animacje, które wskazują aktualny kierunek wiatru.

---

## 2. **Wymagania funkcjonalne**
- Generacja łódki na ekranie gry.
- Sterowanie łódką za pomocą strzałek klawiatury.
- Losowy kierunek wiatru, wizualizowany przez animację lub ikonę.
- Reakcja łódki na kierunek wiatru (automatyczna zmiana kursu w zależności od siły i kierunku wiatru).
- Przejrzysty interfejs użytkownika z ikonami, wskaźnikami wiatru i sterowaniem.

---

## 3. **Wymagania techniczne**
- **Technologia:** .NET MAUI
- **Język programowania:** C#
- **Platformy docelowe:** Android, iOS, Windows
- **Sterowanie:** Obsługa strzałek klawiatury i dotykowego sterowania na ekranie.

---

## 4. **Architektura aplikacji**
Aplikacja będzie oparta na architekturze MVVM (Model-View-ViewModel):
- **Model:** Logika gry (wiatr, ruch łódki).
- **View:** Interfejs użytkownika (łódka, animacje, przyciski).
- **ViewModel:** Komunikacja między modelem a widokiem, zarządzanie stanem aplikacji.

---

## 5. **Mechanika gry**
1. **Sterowanie łódką:**
   - Użytkownik steruje łódką za pomocą strzałek (góra, dół, lewo, prawo).
   - Przyciski ekranowe są aktywne na urządzeniach dotykowych.
2. **Wpływ wiatru:**
   - Wiatr losowany co kilka sekund zmienia kierunek i siłę.
   - Ikona/animacja wskazuje aktualny kierunek wiatru.
   - Łódka automatycznie reaguje na wiatr (np. przesunięcie w danym kierunku).
3. **Cel gry:**
   - Użytkownik utrzymuje kurs łódki mimo działania wiatru.

---

## 6. **Elementy graficzne**
- **Obraz 1:** Ikona łódki (widok z góry, stan neutralny).
- **Obraz 2:** Łódka skręcająca w lewo.
- **Obraz 3:** Łódka skręcająca w prawo.
- **Animacja:** Róża wiatrów, która dynamicznie zmienia się w zależności od kierunku wiatru.

---

## 7. **Przyszłe usprawnienia**
- Dodanie wskaźnika siły wiatru.


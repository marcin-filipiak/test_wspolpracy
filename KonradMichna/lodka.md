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
8. [Specyfikacja funkcjonalna](#8-specyfikacja-funkcjonalna)

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
- **Platformy docelowe:** Android, iOS
- **Sterowanie:** Obsługa strzałek na ekranie telefonu za pomocą przycisku 

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
 - **Schemat sterowania łódką:**  
  ![Alt text](https://junga.pl/wp-content/uploads/2024/03/kursy.png)

---

## 7. **Przyszłe usprawnienia**
- Dodanie wskaźnika siły wiatru.

## 8. **Specyfikacja funkcjonalna**
Szczegółowy opis podstawowych funkcjonalności aplikacji oraz ich działania:

### **1. Generowanie i wizualizacja łódki**
   - **Opis:** Po uruchomieniu aplikacji na ekranie wyświetlana jest łódka widziana z góry.  
   - **Wejścia:** Brak (łódka pojawia się automatycznie).  
   - **Wyjścia:** Graficzne przedstawienie łódki na tle wody.  

### **2. Sterowanie łódką**
   - **Opis:** Użytkownik może sterować łódką za pomocą dotykowego interfejsu.  
   - **Wejścia:**  
     - Strzałka w lewo w formie przycisku na ekranie → skręt w lewo  
     - Strzałka w prawo w formie przycisku na ekranie → skręt w prawo   
   - **Wyjścia:** Zmiana pozycji i orientacji łódki na ekranie.  

### **3. Generowanie i wizualizacja kierunku wiatru**
   - **Opis:** Wiatr zmienia kierunek co kilka sekund i wpływa na ruch łódki.  
   - **Wejścia:** Losowanie nowego kierunku wiatru.  
   - **Wyjścia:**  
     - Graficzna ikona róży wiatrów zmienia się zgodnie z nowym kierunkiem.  
     - Łódka zmienia kurs zgodnie z nowym wiatrem.  

### **4. Reakcja łódki na wiatr**
   - **Opis:** Wiatr wpływa na trajektorię łódki, wymuszając korektę kursu przez gracza.  
   - **Wejścia:** Nowy kierunek i siła wiatru.  
   - **Wyjścia:**  
     - Łódka dryfuje w stronę wiatru, jeśli gracz nie steruje.  
     - Zbyt duży kąt względem wiatru spowalnia łódkę (np. „kąt martwy” na diagramie sterowania).  

### **5. Interfejs użytkownika**
   - **Opis:** Na ekranie dostępne są elementy UI ułatwiające nawigację.  
   - **Elementy:**  
     - Ikona kierunku wiatru.   
     - Przycisk „Reset” do restartu pozycji łódki.  


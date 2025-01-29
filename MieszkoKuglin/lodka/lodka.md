# Dokumentacja aplikacji BoatApp
## Spis treści
- [1. Wstęp](#1-wstęp)
- [2. Cel aplikacji](#2-cel-aplikacji)
- [3. Wymagania techniczne](#3-wymagania-techniczne)
- [4. Zakres funkcjonalny](#4-zakres-funkcjonalny)
- [5. Wymagania funkcjonalne](#5-wymagania-funkcjonalne)
  - [5.1. Wiatr](#51-wiatr)
  - [5.2. Wiatr](#52-łódka)
  - [5.3. Plansza](#53-plansza)
  - [5.4. Przyciski](#54-przyciski)
- [6. Przypadki użycia](#6-przypadki-użycia)
  - [6.1. Losowanie kierunku wiatru](#61-losowanie-kierunku-wiatru)
  - [6.2. Sterowanie łódką](#62-sterowanie-łódką)
  - [6.3. Zmiana prędkośći łódki](#63-zmiana-prędkości-łódki)
- [7. Uwagi](#7-uwagi)
  

## 1. Wstęp
Aplikacja BoatApp to aplikacja desktopowa, jak i moblilna stworzona w .NET MAUI. Jest to forma gry, w której użytkownik manipuluje ruchem łódki na planszy.

## 2. Cel aplikacji
Aplikacja to forma gry, w której losowany jest kierunek wiatru, a użytkownik może dostosowywać rotację łódki za pomocą przycisków. Ruch łódki uwarunkowany jest kątem nachylenia jej przodu do kierunku wiatru. 

## 3. Wymagania techniczne
- **Język programowania:** C#
- **Framework:** .NET MAUI,
- **Docelowe platformy:** Windows, Android, iOS
  
## 4. Zakres funkcjonalny
-  **Wiatr** - losowa wartość kirunku wiatru.
-  **Łódka** - obrazek łódki, którym użytkownik może sterować
-  **Plansza** - element XAML, na którym porusza się łódka.
-  **Przyciski** - dane wejściowe użytkownika, dzięki ich funkcjonalności łodka może się obracać.

## 5. Wymagania funkcjonalne

### 5.1. Wiatr
**Opis:**

Wiatr to kąt wiania wiatru losowany na początku uruchomienia aplikacji z zakresu od 0 do 360. Wartość jest pokazywana użytkownikowi za pomocą elementu **Label** i obrazka strzałki utawionego w odpowiednik kierunku.

**Dane wejściowe:**

Brak

**Dane wyjściowe:**

Wylosowany kąt wiania wiatru.

### 5.2. Łódka
**Opis:**

Łódka to obrazek, który porusza się na planszy. To czy łódka się rusza oraz jak szybko się porusza uwarunkowane jest kątem między kierunkiem wiania wiatru a przodem łodki. Możliwe przykłady pokazane są na rysunkach 1 i 2 *(patrz rys 1. i rys 2.)*. Zarówno obrazek łódki jak i morza jest ujęciem z lotu ptaka.

![image](https://github.com/user-attachments/assets/b0b7311d-5d3f-474c-bada-ff108fab8acd)
*(rys. 1)*

![image](https://github.com/user-attachments/assets/fd0bf103-00d3-4e31-8118-5f780ae6dfff)
*(rys. 2)*

**Dane wejściowe:**

Brak

**Dane wyjściowe:**

Zaktualizowana pozycja łódki na planszy.

### 5.3. Plansza
**Opis:**

Plansza reprezentuje morze, na którym porusza się łódka. Ma też swoje granice, za które łódka nie może wypłynąć. Zarówno obrazek łódki jak i morza jest ujęciem z lotu ptaka.

**Dane wejściowe:**

Brak

**Dane wyjściowe:**

Brak

### 5.4. Przyciski 
Są dwa przyciski: przycisk strzałki w lewo i w prawo. Naciśnięcie każdego powoduje obrót łódki w odpowiednim kierunku o 15°.

**Dane wejściowe:**

Interakcja użytkownika poprzez naciśnięcie jednego z przycisków.

**Dane wyjściowe:**

Nowy kąt nachylenia łódki.

## 6. Przypadki użycia

### 6.1. Losowanie kierunku wiatru
**Aktor:** Użytkownik
**Opis:** Po uruchomieniu aplikacji losowany jest kierunek wiatru. 
**Przebieg działania:**
- Użytkownik odpala aplikację.
- Losowany jest kierunek.
- Wyświetlany jest napis (Label): *Wiatr wieje w kierunku {degree}°*.
- Wyśweitlana jest odpowiednio obrócona strzałka wskazująca kierunek wiatru (Image).

### 6.2. Sterowanie łódką 
**Aktor:** Użytkownik
**Opis:** Po kliknięciu przycisku strzałki łódka odwraca się o 15° w danym kierunku (lewo/prawo). 
**Przebieg działania:**
1. Obrót w lewo: 
- Użytkownik naciska przycisk strzałki w lewo.
- Łódka odwraca się o 15° w lewo.
- Zależnie od kątu nachylenia, łódka porusza się, zatrzymuje lub stoi w miejscu.

2. Obrót w prawo: 
- Użytkownik naciska przycisk strzałki w prawo.
- Łódka odwraca się o 15° w prawo.
- Zależnie od kątu nachylenia, łódka porusza się, zatrzymuje lub stoi w miejscu.


### 6.3. Zmiana prędkości łódki
**Aktor:** Użytkownik
**Opis:** Użytkownik obserwuje zmieniającą się prędkość łódki w zależności od kierunku wiatru oraz jej kątu nachylenia.
**Przebieg działania:**
- Użykownik za pomocą przycisków strzałek steruje łódką.
- Prędkość łódki jest obliczana w czasie rzeczywistym.
- Prędkość łódki może zmieniać się lub pozostać taka sama.

## 7. Uwagi
- Prędkość łódki powinna być obliczana dynamicznie *(wzór)*, a nie za pomocą statycznych wartości i warunków *(if)*.


# Dokumentacja aplikacji BoatApp
## Spis treści
1. [Wstęp](#1-wstęp)

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

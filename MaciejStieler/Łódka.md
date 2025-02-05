# BoatNavigator - Dokumentacja Techniczna

## 1. Wstęp
BoatNavigator to mobilna aplikacja 2D symulująca żeglugę łódką. Użytkownik steruje łódką za pomocą przycisków lewo/prawo, a łódka porusza się bez przerwy do przodu. Aplikacja została zaprojektowana w celu nauki podstawowych zasad nawigacji i sterowania.

---

## 2. Funkcjonalności
1. **Widok gry (2D)**:
   - Główne okno aplikacji wyświetla akwen oraz łódkę w widoku z góry.
   - Grafika oparta na prostych kształtach.

2. **Sterowanie**:
   - Łódka porusza się automatycznie do przodu.
   - Dwa przyciski na ekranie umożliwiają zmianę kierunku:
     - **Lewo**: Obrót łódki o 15 stopni w lewo.
     - **Prawo**: Obrót łódki o 15 stopni w prawo.

3. **Interfejs użytkownika**:
   - Na ekranie wyświetlane są informacje o:
     - Aktualnym kącie obrotu łódki.
     - Prędkości łódki.

---

## 3. Architektura aplikacji
1. **Warstwa prezentacji**:
   - Zbudowana przy użyciu komponentów .NET MAUI.
   - Wykorzystuje `Canvas` do rysowania łódki i akwenu.
   - Przyciski sterujące to `Button` osadzone w dolnym panelu.

2. **Logika gry**:
   - Ruch łódki jest obsługiwany w warstwie logiki gry.
   - Sterowanie zmienia jedynie kąt obrotu łódki.

3. **Fizyka ruchu**:
   - Łódka przemieszcza się zgodnie z aktualnym kątem obrotu.
   - **Wzór na zmianę pozycji**:  
     ```
     X_new = X + Speed * cos(Angle)
     Y_new = Y + Speed * sin(Angle)
     ```
     Gdzie:
     - `Speed` to stała prędkość łódki.
     - `Angle` to bieżący kąt obrotu łódki.

---

## 4. Struktura kodu
1. **Pliki projektu**:
   - `MainPage.xaml`: Interfejs użytkownika.
   - `MainPage.xaml.cs`: Logika obsługi UI i sterowania.
   - `Boat.cs`: Klasa reprezentująca łódkę (położenie, kąt obrotu).
   - `GameEngine.cs`: Logika ruchu łódki.

2. **Główne klasy**:
   - **Boat**:
     ```csharp
     public class Boat
     {
         public float X { get; set; }
         public float Y { get; set; }
         public float Angle { get; set; } = 0;
         public float Speed { get; set; } = 5;

         public void RotateLeft() => Angle -= 15;
         public void RotateRight() => Angle += 15;

         public void MoveForward()
         {
             X += Speed * Math.Cos(Angle * Math.PI / 180);
             Y += Speed * Math.Sin(Angle * Math.PI / 180);
         }
     }
     ```
   - **GameEngine**:
     ```csharp
     public class GameEngine
     {
         private Boat _boat;

         public void UpdateBoatMovement()
         {
             _boat.MoveForward();
         }

         public void RotateBoatLeft()
         {
             _boat.RotateLeft();
         }

         public void RotateBoatRight()
         {
             _boat.RotateRight();
         }
     }
     ```
---

## 5. Przypadki testowe

### 5.1 Testowanie ruchu łódki
- **Opis**: Sprawdzenie, czy łódka porusza się automatycznie do przodu.
- **Oczekiwany wynik**: Pozycja X i Y powinna zmieniać się zgodnie z kątem obrotu.

### 5.2 Testowanie obrotu w lewo
- **Opis**: Naciśnięcie przycisku "Lewo".
- **Oczekiwany wynik**: Kąt obrotu zmniejsza się o 15 stopni.

### 5.3 Testowanie obrotu w prawo
- **Opis**: Naciśnięcie przycisku "Prawo".
- **Oczekiwany wynik**: Kąt obrotu zwiększa się o 15 stopni.

### 5.4 Testowanie wielokrotnego obrotu
- **Opis**: Wielokrotne naciśnięcie "Lewo" lub "Prawo".
- **Oczekiwany wynik**: Łódka obraca się poprawnie w zadanym kierunku.

### 5.5 Testowanie poprawnej zmiany pozycji po obrocie
- **Opis**: Obrót łódki o 90 stopni i sprawdzenie ruchu do przodu.
- **Oczekiwany wynik**: Łódka powinna zmieniać współrzędne zgodnie z nowym kątem.

---

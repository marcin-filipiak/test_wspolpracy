## 1. Wstęp
Niniejsza dokumentacja opisuje projekt aplikacji stworzonej w .NET MAUI, której celem jest symulacja ruchu żaglówki po ekranie. Projekt ma charakter edukacyjno-rozrywkowy i demonstruje podstawowe zasady żeglowania     związane z kątem wiatru oraz możliwością poruszania się względem jego kierunku.

Aplikacja symuluje żaglówkę sterowaną przez użytkownika, uwzględniając wpływ wiatru na jej ruch. Wiatr zmienia się losowo co jakiś czas i wpływa na prędkość oraz możliwość poruszania się żaglówki.


## 2 Opis działania aplikacji
Użytkownik steruje żaglówką za pomocą klawiszy:
Strzałka w lewo – obrót żaglówki w lewo.
Strzałka w prawo – obrót żaglówki w prawo.

Wiatr generowany jest losowo co pewien czas i zmienia się o 45° w lewo lub w prawo względem poprzedniego kierunku.
Kąt wiatru wyświetlany jest w rogu ekranu.

Prędkość żaglówki zależy od kąta względem kierunku wiatru:
Jeśli żaglówka jest ustawiona pod kątem martwym (ok. 45° na lewo i prawo od wiatru), nie płynie.
Im bardziej zgodna z kierunkiem wiatru, tym szybciej płynie.
## 3. Technologie
.NET MAUI – framework wieloplatformowy do tworzenia aplikacji mobilnych i desktopowych.
C# – język programowania użyty do implementacji logiki gry.
MVVM – wzorzec architektoniczny zastosowany w projekcie.
XAML – język do definiowania interfejsu użytkownika.
## 4. Opis Funkcjonalności
## 4.1 Interfejs użytkownika
Tło przedstawiające wodę.
Obraz żaglówki, który może się obracać.
Wskaźnik kierunku wiatru w rogu ekranu.
Przycisk do restartu.
## 4.2 Generowanie wiatru
Wiatr generowany jest co ok. 5-10 sekund.
Kierunek zmienia się o ±45° od poprzedniego.
Wartość kierunku wiatru jest przechowywana i wyświetlana na ekranie.
## 4.3 Sterowanie łódką
Naciśnięcie strzałki w lewo lub prawo obraca żaglówkę o 15°.
Żaglówka porusza się tylko wtedy, gdy jej kurs względem wiatru na to pozwala.
Prędkość jest obliczana na podstawie kąta względem wiatru:
0° (dokładnie z wiatrem) – maksymalna prędkość.
180° (pod wiatr) – nie może się poruszać.
Między 0° a 180° – prędkość proporcjonalna do kąta.
## 5. Algorytm ruchu żaglówki
Sprawdzenie kąta względem wiatru

Jeśli kąt żaglówki mieści się w zakresie tzw. kąta martwego (ok. ±45° od kierunku wiatru) → brak ruchu.
Jeśli kąt żaglówki pozwala na poruszanie się → obliczenie prędkości.
Obliczenie prędkości

Prędkość jest funkcją kąta między wiatrem a dziobem żaglówki.
Maksymalna prędkość przy kącie 0° (pełny baksztag – wiatr od rufy).
Przy kurcie ostrym (blisko kąta martwego) prędkość minimalna.
Aktualizacja pozycji żaglówki

Nowa pozycja obliczana na podstawie wektora ruchu.
Jeśli przekracza granice ekranu → powrót na środek.

## 6 Pliki i klasy
MainPage.xaml – definicja interfejsu użytkownika.
MainPage.xaml.cs – obsługa zdarzeń i logiki sterowania.
BoatViewModel.cs – logika ruchu żaglówki (MVVM).
WindService.cs – losowe generowanie kierunku wiatru.

## 7. Podsumowanie
Projekt symulacji żaglówki w .NET MAUI pozwala użytkownikowi na interaktywną naukę podstawowych zasad żeglowania. Uwzględnia on zmieniający się wiatr oraz realistyczne zależności między kątem wiatru a prędkością łódki.

Aplikacja może być rozwijana o dodatkowe funkcje, np. różne warunki pogodowe, przeszkody na wodzie, czy system punktacji za efektywne żeglowanie.

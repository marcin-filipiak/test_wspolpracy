Specyfikacja funkcjonalna gry Sailor
# 1. Wstęp
Dokument opisuje wymagania funkcjonalne dla gry wieloplatformowej Sailor. Przeznaczony jest dla uczniów, którzy na jego podstawie mają przygotować oprogramowanie.
# 2. Cel systemu
Gra Sailor ma dawać użytkownikom przyjemność poprzez interaktywne poruszanie łódką po planszy.
# 3. Zakres funkcjonalny
System będzie składał się z następujących modułów:
* **Moduł Planszy** - odpowiedzialny za przestrzeń, po której łódka może się przemieszczać.
* **Moduł Łódki** - odpowiedzialny za poruszanie łódką po planszy.
* **Moduł Wiatru** - odpowiedzialny za losowanie kierunku wiatru.
* **Moduł Sterowania** - odpowiedzialny za obsługę danych wejściowych użytkownika.
# 4. Wymagania funkcjonalne
## 4.1 Moduł Planszy
### Funkcje:
1. **async Tick**: Wywołuje w określonych odstępach czasu główną logikę aplikacji (przemieszczenie łódki na podstawie aktualnej prędkości i obrotu)
1. **UpadeBoat**: aktualizuje pozycję i obrót łódki na planszy
### Dane wejściowe:
* pozycja łódki
* obrót łódki
### Dane wyjściowe:
* brak
## 4.2 Moduł Łódki
### Funkcje:
1. **Speed**: na podstawie różnicy kąta wiatru i kąta obrotu łódki ustala jej prędkość (0° - 30° prędkość = 2, 31° - 90° prędkość = 1, 91° - 130° prędkość = 0.5, 131° - 180° prędkość = 0, i analogicznie dla wartości ujemnych)
1. **Move**: na podstawie aktualnego obrotu łódki oraz jej prędkości, zmienia jej pozycję na planszy
### Dane wejściowe: 
* aktualny kąt wiatru
### Dane wyjściowe:
* pozycja łódki
* obrót łódki
## 4.3 Moduł wiatru
### Funkcje:
1. **Prepare** - losuje początkowy kierunek wiatru
### Dane wejściowe:
* brak
### Dane wyjściowe:
* kąt wiatru
## 4.4 Moduł Sterowania
### Funkcje:
1. **RightButtonClick** - wywołuje metodę obracającą łódkę w prawo
1. **LeftButtonClick** - wywołuje metodę obracającą łódkę w lewo
# 5. Przypadki użycia
## 5.1 Naciśnięcie przycisku w prawo
### Aktorzy:
* Użytkownik systemu - gracz
### Opis:
1. Użytkownik naciska przycisk "W prawo"
1. System zmienia kąt obrotu łódki w prawo o określoną ilość stopni
### Dane wejściowe:
* brak
### Dane wyjściowe:
* brak
## 5.2 Naciśnięcie przycisku w lewo
### Aktorzy:
* Użytkownik systemu - gracz
### Opis:
1. Użytkownik naciska przycisk "W lewo"
1. System zmienia kąt obrotu łódki w lewo o określoną ilość stopni
### Dane wejściowe:
* brak
### Dane wyjściowe:
* brak
# 6. Wymagania niefunkcjonalne
* Gra ma odświeżanie 25 fps
# 7. Technologie i ograniczenia
* Framework: .NET MAUI
# 8. Inne uwagi
* System powinien umożliwiać łatwą rozbudowę o kolejne moduły i rozszerzenie funkcjonalności.

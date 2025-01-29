# Gra mobilna – "Łódka"

## Wprowadzenie
Aplikacja "Łódka" to symulacja interaktywnego żeglowania, w której użytkownik steruje kierunkiem łódki, a jej prędkość zależy od wiatru. Realistyczny model fizyki oddaje wpływ warunków atmosferycznych na ruch jednostki pływającej, co stanowi wyzwanie dla gracza.

## Spis Treści
- [Najważniejsze funkcje](#najważniejsze-funkcje)
- [Technologie użyte w aplikacji](#technologie-użyte-w-aplikacji)
- [Instalacja i uruchomienie](#instalacja-i-uruchomienie)
- [Mechanika gry](#mechanika-gry)
- [Wpływ wiatru](#wpływ-wiatru)
- [Interakcja użytkownika](#interakcja-użytkownika)
- [Przyszłe usprawnienia](#przyszłe-usprawnienia)
- [Kontakt](#kontakt)

## Najważniejsze funkcje
- **Symulacja żeglowania** – ruch łódki oparty na realistycznym modelu fizyki.
- **Sterowanie kierunkiem** – użytkownik może obracać łódką, ale jej prędkość zależy od wiatru.
- **Dynamiczna zmiana warunków pogodowych** – losowo generowany wiatr o różnych kierunkach i intensywności.
- **Realistyczne oddziaływanie wiatru** – różne efekty w zależności od kąta natarcia wiatru na żagle.
- **Prosty i intuicyjny interfejs** – przyciski umożliwiające kontrolę nad łódką.

## Technologie użyte w aplikacji
- **.NET MAUI** – platforma do tworzenia aplikacji mobilnych.

## Instalacja i uruchomienie
Aby zainstalować aplikację, wykonaj następujące kroki:

```bash
w trakcie budowy
```

## Mechanika gry
Łódka nie porusza się samodzielnie – jej prędkość jest zależna od wiatru. Użytkownik może jedynie sterować kierunkiem łódki (obracając ją w lewo lub w prawo). 

## Wpływ wiatru
Siła i kierunek wiatru mają kluczowy wpływ na ruch łódki:
- **Wiatr w żagle (z tyłu)** – maksymalna prędkość łódki.
- **Wiatr boczny** – umiarkowana prędkość i konieczność dostosowania kursu.
- **Wiatr czołowy** – zatrzymuje łódkę, wymuszając zmianę kierunku.

Kierunek wiatru jest losowo zmieniany w czasie rzeczywistym. Może on przybierać następujące wartości:
- **Północ (N)**
- **Południe (S)**
- **Wschód (E)**
- **Zachód (W)**
- **Kierunki pośrednie (NE, NW, SE, SW)**

## Interakcja użytkownika
- **Obracanie łódki** – zmiana kierunku poruszania w lewo lub w prawo.
- **Obserwacja zmian wiatru** – dostosowanie kursu do warunków pogodowych.
- **Reakcja na zmieniające się warunki** – planowanie manewrów na podstawie siły i kierunku wiatru.

## Przyszłe usprawnienia
- Wprowadzenie efektów wizualnych dla fal i odbić światła.
- Optymalizacja wydajności silnika symulacyjnego.
- Dodanie trybu multiplayer.

## Kontakt
Wszelkie pytania i sugestie prosimy kierować na adres e-mail: **kontakt@lodka-mobile.pl**.


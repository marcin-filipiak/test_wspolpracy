# Dokumentacja Aplikacji Mobilnej – "Łódka"

> Aplikacja mobilna "Łódka" pozwala na interaktywne sterowanie łódką na wodzie przy pomocy przycisków. Gra uwzględnia wpływ wiatru na ruch łódki. Aplikacja oferuje różne kierunki wiatru, które wpływają na ruch łódki w zależności od jej orientacji.

## Spis Treści
1. [Główne funkcjonalności](#główne-funkcjonalności)
2. [Użyte technologie](#użyte-technologie)
3. [Instalacja](#instalacja)
4. [Przypadki użycia](#przypadki-użycia)
5. [Plany na przyszłość](#plany-na-przyszłość)
6. [Kontakt](#kontakt)

## Główne funkcjonalności
1. **Sterowanie łódką**: Użytkownik ma możliwość sterowania łódką (lewo, prawo) za pomocą przycisków na ekranie.
2. **Wiatr**: W aplikacji pojawia się wiatr, którego kierunek jest generowany losowo.
3. **Ruch łódki**: W zależności od kierunku wiatru, łódka może poruszać się w sposób szybszy lub wolniejszy.
4. **Interakcja z wiatrem**: Użytkownik musi dostosować ruchy łódki w zależności od zmieniającego się kierunku wiatru.

![Alt text](https://www.charter.edu.pl/uploaded_files/image/baza-wiedzy/obraz5312972429_m.jpg)

## Użyte technologie
#### .NET MAUI

## Instalacja
```
git clone https://github.com/danekkkk/lodka-mobile.git
```

## Przypadki użycia
### Przypadek Użycia 1: Losowanie kierunku wiatru

**Aktorzy**: Użytkownik <br />
**Opis**: Aktor uruchamia aplikację i losuje kierunek wiatru, co pozwala na poznanie różnych warunków żeglarskich. Kierunek wiatru wpływa na prędkość łódki, zapewniając realistyczne odzwierciedlenie dynamiki żeglowania. <br />
**Scenariusz**: 
1. Użytkownik otwiera aplikację.
2. Aplikacja generuje losowy kierunek wiatru wraz z wizualizacją na ekranie (za pomocą kompasu)
3. Wyświetlany jest komunikat tekstowy z nazwą wiatru (np. „wiatr południowy”) oraz prędkością wiatru w węzłach (knots).
4. Użytkownik może przejść do sterowania łódką przy uwzględnieniu aktualnych warunków wiatrowych.

### Przypadek Użycia 2: Sterowanie łódką za pomocą interfejsu użytkownika
**Aktorzy**: Użytkownik <br />
**Opis**: Aktor wykorzystuje dostępny interfejs (strzałki na ekranie) do zmiany orientacji łódki względem wiatru. Sterowanie pozwala użytkownikowi eksperymentować z różnymi strategiami żeglowania, jednocześnie zmieniając kierunek i dostosowując prędkość łódki w czasie rzeczywistym. <br />
**Scenariusz główny**:
1. Użytkownik naciska klawisz `<`, co obraca łódkę w lewo o 10°.
2. Użytkownik naciska klawisz `>`, co obraca łódkę w prawo o 10°.
3. Zmiana orientacji łódki jest wizualizowana na ekranie w formie animacji obrotu łódki.
4. Aplikacja automatycznie oblicza wpływ kąta natarcia wiatru na żagiel oraz wyświetla zmodyfikowaną prędkość łódki w zależności od warunków żeglarskich.
5. W czasie rzeczywistym użytkownik może zmieniać kurs i dostosowywać sterowanie w celu optymalizacji prędkości łódki.

**Scenariusz alternatywny**: <br />
5a. Gdy łódka wejdzie w martwy kąt, prędkość zostaje wyzerowana.

### Przypadek Użycia 3: Obliczanie prędkości łódki w czasie rzeczywistym
**Aktorzy**: Użytkownik <br />
**Opis**: Aplikacja dynamicznie oblicza prędkość łódki w czasie rzeczywistym, bazując na orientacji łódki względem kierunku wiatru. Funkcja ta pozwala użytkownikowi zrozumieć wpływ kąta wiatru na osiąganą prędkość i eksperymentować z manewrami. <br />
**Scenariusz główny**:
1. Użytkownik ustawia łódkę w określonym kierunku względem wiatru (np. półwiatr).
2. Aplikacja wylicza aktualną prędkość łódki na podstawie fizycznych zasad żeglowania, takich jak:
   - Prędkość wiatru w węzłach,
   - Kąt natarcia wiatru na żagiel,
   - Wyznaczenie kąta martwego i jego wpływu na ruch łódki.
3. Użytkownik obserwuje dynamicznie zmieniające się parametry prędkości wyświetlane na ekranie w panelu kontrolnym.
4. Prędkość łódki różni się w zależności od kąta ustawienia:
   - Maksymalna prędkość osiągana przy kursie półwiatr,
   - Brak prędkości w kącie martwym.

## Plany na przyszłość
Dodanie bardziej zaawansowanego trybu, uwzględniającego:
1. **Wpływ prądów wodnych**: Symulacja kierunków i siły prądów wodnych, które wpływają na prędkość i trasę łódki.
2. **Dynamiczne zmiany pogody**: Wprowadzenie zmiennych warunków atmosferycznych, takich jak gwałtowne zmiany wiatru (szkwał) lub spadki prędkości wiatru.
3. **Rozszerzone parametry łódki**: Wprowadzenie różnych typów łódek z unikalnymi właściwościami, np. różne kształty kadłuba lub konfiguracje żagli.

## Kontakt
W przypadku pytań lub opinii prosimy o kontakt z **@danekkkk**.

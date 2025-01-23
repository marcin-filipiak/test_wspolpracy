# Łódki

## Spis treści

- [Informacje ogólne](#informacje-ogólne)
- [Założenia aplikacji](#założenia-aplikacji)
- [Technologie](#technologie)
- [Przypadki użycia](#przypadki-użycia")
- [Instalacja](#instalacja)

## Informacje ogólne

Gra mobilna, w której gracz steruje łódką pływającą na wodzie. Sterowanie odbywa się za pomocą dwóch przycisków służących do obracania łódki. Prędkość poruszania się łódki jest uzależniona od kierunku wiatru. Celu gry na ten moment nie ma - służy bardziej jako symulacja wpływu kierunku wiatru na prędkość poruszania się łódki

<img src="https://thumbs.dreamstime.com/b/boat-top-view-isolated-vector-illustration-90963291.jpg" width="256px" />

## Założenia aplikacji

Po wejściu do gry widać łódkę na wodzie z góry. W prawym górnym rogu znajduje się igła kompasu wskazująca kierunek wiatru wraz z dokładną wartością w stopniach.

<img src="https://cdn2.iconfinder.com/data/icons/pix-glyph-set/50/520554-compass_2-512.png" width="256px" />

Na dole znajdują się dwa przyciski służące do obracania łódki. Prędkość, z jaką poruszać się będzie łódka jest uzależniona od kierunku wiatru.

Łódka posiada dwa żagle, które obracają się zgodnie z kierunkiem wiatru i obrotem łódki. Mają na celu jak najwierniejsze odzwierciedlenie rzeczywistego położenia żagli na łódce.

<img src="https://oceansaillust.com/wp-content/uploads/2023/05/point-of-sails1-1.png" width="256px" />

## Technologie

<img src="https://th.bing.com/th/id/OIP.0cez_V3oCGdjzSU6SOjrPAAAAA?rs=1&pid=ImgDetMain" width="128px" />

1. MAUI (C#)
2. Wzorzec projektowy MVVM

## Przypadki użycia

### 1. Sterowanie łódką:

#### Opis: Użytkownik steruje łódką przy użyciu dwóch przycisków na ekranie, co umożliwia obracanie łódki w lewo i w prawo.

#### Przebieg:
- Użytkownik uruchamia grę.
- Użytkownik widzi łódkę na wodzie z góry.
- Użytkownik naciska przycisk obracania w lewo lub w prawo.
- Łódka obraca się w odpowiednim kierunku.

### 2. Wpływ kierunku wiatru na prędkość łódki:

#### Opis: Prędkość, z jaką porusza się łódka, zależy od kierunku wiatru wskazywanego przez kompas.

#### Przebieg:

- Użytkownik uruchamia grę.
- Użytkownik widzi łódkę na wodzie z góry oraz igłę kompasu wskazującą kierunek wiatru.
- Użytkownik steruje łódką, obserwując zmiany w prędkości łódki w zależności od kierunku wiatru.

### 3. Obserwacja żagli:

#### Opis: Żagle na łódce obracają się zgodnie z kierunkiem wiatru i obrotem łódki, symulując rzeczywiste warunki żeglarskie.

#### Przebieg:

- Użytkownik uruchamia grę.
- Użytkownik widzi łódkę na wodzie z góry oraz igłę kompasu wskazującą kierunek wiatru.
- Użytkownik steruje łódką, obserwując jak żagle zmieniają swoje położenie zgodnie z kierunkiem wiatru i obrotem łódki.

## Instalacja

1. Sklonuj repozytorium

```bash
git clone https://github.com/fmadzia/boats.git
```
   
2. Otwórz w wybranym IDE (np. Visual Studio lub Rider)
3. Zbuilduj aplikację i uruchom na emulatorze lub urządzeniu mobilnym

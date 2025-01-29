# Łódki

### **Ocena: dopuszczający (dop.)**  

#### **Uzasadnienie:**  
🔹 **Brak kluczowych informacji** – nie wiadomo, jak dokładnie działa mechanika wiatru, żagli i sterowania.  
🔹 **Nieprecyzyjne opisy** – sformułowania sugerują pewne mechanizmy, ale nie definiują ich jednoznacznie.  
🔹 **Niepełne przypadki użycia** – nie zawierają wystarczających szczegółów, by stworzyć aplikację na ich podstawie.  
🔹 **Brak istotnych elementów** – np. nazw wiatrów, mimo że był to jeden z celów aplikacji.  

Dokumentacja wymaga znacznej poprawy, aby można było na jej podstawie stworzyć aplikację zgodną z założeniami.

## Spis treści

- [Informacje ogólne](#informacje-ogólne)
- [Założenia aplikacji](#założenia-aplikacji)
- [Technologie](#technologie)
- [Przypadki użycia](#przypadki-użycia)
- [Instalacja](#instalacja)

## Informacje ogólne

Gra mobilna, w której gracz steruje łódką pływającą na wodzie. Sterowanie odbywa się za pomocą dwóch przycisków służących do obracania łódki. Prędkość poruszania się łódki jest uzależniona od kierunku wiatru. Celu gry na ten moment nie ma ```czyli to nie gra``` - służy bardziej jako symulacja wpływu kierunku wiatru na prędkość poruszania się łódki ```między innymi celem jest wyświetlenie nazwy wiatru z jakim porusza się łódka```

<img src="https://thumbs.dreamstime.com/b/boat-top-view-isolated-vector-illustration-90963291.jpg" width="256px" />

## Założenia aplikacji

Po wejściu do gry widać łódkę na wodzie z góry. W prawym górnym rogu znajduje się igła kompasu wskazująca kierunek wiatru wraz z dokładną wartością w stopniach.

<img src="https://cdn2.iconfinder.com/data/icons/pix-glyph-set/50/520554-compass_2-512.png" width="256px" />

Na dole znajdują się dwa przyciski służące do obracania łódki. Prędkość, z jaką poruszać się będzie łódka jest uzależniona od kierunku wiatru. 

Łódka posiada dwa żagle, które obracają się zgodnie z kierunkiem wiatru i obrotem łódki. ```mało precyzyjne określenie ustawienia żagli, czy one obracają się ZGODNIE z kierunkiem wiatru I obrotem łódki? Żagle będą często obracać się nie zgodnie a przeciwnie do obrotu łódki.``` Mają na celu jak najwierniejsze odzwierciedlenie rzeczywistego położenia żagli na łódce.

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
- Użytkownik widzi łódkę na wodzie z góry. ```a co jeśli użytkownik nie patrzy na ekran? ;-) Nie wiemy co widzi użytkownik ale możemy napisać co będzie wyświetlała aplikacja```
- Użytkownik naciska przycisk obracania w lewo lub w prawo.
- Łódka obraca się w odpowiednim kierunku. ```jaki to jest odpowiedni kierunek? Bo jeśli symulujemy sterowanie rumplem, to wydając polecenie skrętu w lewo łódka skręca w prawo```
```czy żeby ponownie skręcić w lewo lub w prawo mam ponownie uruchomić aplikację? Z opisu wynika że mogę skręcić w lewo lub w prawo, a czy mogę dwa razy w prawo a potem w lewo? Czy tylko prawo LUB lewo?``` 

### 2. Wpływ kierunku wiatru na prędkość łódki:

#### Opis: Prędkość, z jaką porusza się łódka, zależy od kierunku wiatru wskazywanego przez kompas. 
```a na jakich zasadach wybierany jest kierunek wiatru?```

#### Przebieg:

- Użytkownik uruchamia grę.
- Użytkownik widzi łódkę na wodzie z góry oraz igłę kompasu wskazującą kierunek wiatru. ``` nie wiemy co widzi użytkownik ;-) mamy tylko wpływ na to co wyświetli aplikacja```
- Użytkownik steruje łódką, obserwując zmiany w prędkości łódki w zależności od kierunku wiatru. ``` w jaki sposób dochodzi do zmian prędkości łódki w zależności od kierunku wiatru? Nie wiemy czy użytkownik obserwuje zmiany w prędkości natomiast definiujemy jak aplikacja reaguje na działania użytkownika```

### 3. Obserwacja żagli:
```bardziej sterowanie żaglami niż obserwacja```

#### Opis: Żagle na łódce obracają się zgodnie z kierunkiem wiatru i obrotem łódki, symulując rzeczywiste warunki żeglarskie.
```ponownie zastanawiam się czy żagle obracają się ZGODNIE z obrotem łódki i wiatru. Znaczy łódka w prawo, żagle w prawo i wiatr w prawo?```

#### Przebieg:

- Użytkownik uruchamia grę.
- Użytkownik widzi łódkę na wodzie z góry oraz igłę kompasu wskazującą kierunek wiatru. ``` nie wiemy co widzi użytkownik ;-) mamy tylko wpływ na to co wyświetli aplikacja```
- Użytkownik steruje łódką, obserwując jak żagle zmieniają swoje położenie zgodnie z kierunkiem wiatru i obrotem łódki. ```a jak zmieniają to położenie? Czy użytkownik obserwuje to inna sprawa...```

```BRAK INFORMACJI O NAZWACH WIATRÓW Z JAKIMI PŁYNIEMY```

## Instalacja

1. Sklonuj repozytorium

```bash
git clone https://github.com/fmadzia/boats.git
```
   
2. Otwórz w wybranym IDE (np. Visual Studio lub Rider)
3. Zbuilduj aplikację i uruchom na emulatorze lub urządzeniu mobilnym

``` UWAGI: ogólnie dowiedziałem się co to za aplikacja, jednak na podstawie przypadków użycia nie jestem w stanie jej stworzyć. Nie wiem jak wpływa wiatr na łódkę, jak się zmienia jej prędkość, nie jest wyjaśnione jak obracać żaglami, nie wiem jak określić kierunek wiatru (wiem że jest wyświetlany na kompasie). Nie ma w programie żadnych informacji z jakim wiatrem płyniemy (np. bakszatg), a to było naszym celem.```

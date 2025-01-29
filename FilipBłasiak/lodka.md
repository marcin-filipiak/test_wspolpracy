# Specyfikacja funkcjonalna gry "Łódka"
Aplikacja mobilna "Łódka" pozwala na interaktywne sterowanie łódką na wodzie przy pomocy przycisków. Gra uwzględnia wpływ wiatru na poruszanie się łódki. Aplikacja zawiera różne kierunki wiatru, które wpływają na ruch łódki w zależności od jej orientacji. ```a to nie sternik na to wpływa?```

## 1. Zakres funkcjonalny
1. **Sterowanie łódką**: Użytkownik ma możliwość obracania łódką (lewo, prawo) za pomocą przycisków na ekranie.
2. **Wiatr**: Kierunek wiatru oraz jego prędkość są losowo wybierane na początku symulacji oraz co ustalony czas. ```w stopniach czy nazwami N, S. Co jaki ustalony czas?``` 
3. **Ruch łódki**: W zależności od kierunku wiatru oraz aktualnej orientacji łódki, aplikacja oblicza jej prędkość.```bedę szukał w dokumentacji wzorów``` Symulacja uwzględnia kąt natarcia wiatru na żagle. ```to będą ciekawe wzory, trzymam za słowo```
4. **Interakcja z wiatrem**: Użytkownik musi dostosować ruchy łódki w zależności od zmieniającego się kierunku wiatru. ```znaczy jak musi?```

## 2. Diagram wiatru
Aby lepiej zobrazować wpływ różnych kierunków wiatru na żeglowanie, poniżej znajduje się przykładowy diagram:
   ![Alt text](https://marigo.pl/wp-content/uploads/2018/04/kierunki-wiatr%C3%B3w.png)

## 3. Wymaganie technologiczne
- **Technologia:** .NET MAUI
- **Język programowania:** C#
- **Platformy docelowe:** Android, IOS, Windows

## 4. Wymagania funkcjonalne
### 4.1 Sterowanie łódką
#### Opis:
- Funkcja 1: Umożliwienie użytkownikowi sterowania łódką za pomocą przycisków "left" i "right". 
- Funkcja 2: Zmiana orientacji łódki w zależności od działania użytkownika. ```w jaki sposób?```
### 4.2 Wiatr
#### Opis:
- Funkcja 1: Losowanie kierunku i prędkości wiatru na początku gry oraz po ustalonym czasie. ```no ok ale jak, gdzie, kiedy, i o ile```
- Funkcja 2: Obliczenie wpływu wiatru na ruch łódki w zależności od jej orientacji. ```jak wykonać te obliczenia?```
- Funkcja 3: Zmiana kierunku wiatru w trakcie gry.
### 4.3 Ruch łódki
#### Opis:
- Funkcja 1: Łódka automatycznie płynie do przodu z prędkością zalężną od kierunku wiatru ```ok, jak ta zeleżność wygląda?```, chyba że wiatr jest skierowany prosto w dziób statku to statek nie będzie się poruszał, aż do momentu jego obrócenia. ```btw: statek i łódka to nie to samo```
### 4.4 Interakcja z wiatrem
#### Opis:
- Funkcja 1: Ustalenie prędkości poruszania się łódki w zależności od ustawienia statku względem kierunku wiatru oraz jego aktualnej prędkości . ```i jak to mam zrobić?```
## 5. Przypadki Użycia:
### Przypadek Użycia 1: Losowanie kierunku i prędkości wiatru

<b>Aktor:</b> Użytkownik<br>
<b>Opis:</b> Użytkownik uruchamia aplikację, aby wygenerować kierunek i prędkość wiatru<br>
<b>Scenariusz:</b>
- Użytkownik uruchamia aplikację.
- Aplikacja losowo generuje kierunek i prędkość wiatru. ```jak mam wygenerować?```
- Użytkownik widzi wybrany kierunek wiatru, jego prędkość oraz prędkość łódki. ```nie prawda, użytkownik sobie patrzy za okno i ogląda ulicę```
- Kierunek i prędkość wiatru są wyświetlone na ekranie. ```jakieś jednostki? jaki format?```

### Przypadek Użycia 2: Sterowanie łódką

<b>Aktor:</b> Użytkownik<br>
<b>Opis:</b> Użytkownik steruje łódką, używając przycisków na ekranie do obracania jej.<br>
<b>Scenariusz:</b>
- Użytkownik naciska przycisk na ekranie o nazwie "left", aby obrócić łódkę w lewo. ```o ile ją obraca stopni?```
- Użytkownik naciska przycisk na ekranie o nazwie "right", aby obrócić łódkę w prawo.
- Łódka zmienia kierunek, a jej prędkość dostosowuje się do nowej orientacji. ```a jak się dostosowuje?```
- Łódka zmienia kierunek i prędkość w zależności od ustawionego kierunku wiatru.

## 6. Podsumowanie
Symulacja żeglowania to interaktywna aplikacja edukacyjna, która pomaga użytkownikom zrozumieć zasady wpływu wiatru na ruch łódki. Dzięki prostemu sterowaniu i losowym warunkom wiatrowym, użytkownicy mogą testować różne manewry i szybko dostrzegać, jak zmieniające się warunki wiatrowe wpływają na prędkość łódki i jej kierunek.

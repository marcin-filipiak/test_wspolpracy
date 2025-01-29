# Łódka - **Symulacja ruchu łodzi żaglowej**
## 1. Założenia:
Aplikacja symulująca ruch łódki żaglowej wraz z uwzględnieniem wiatru oraz kierunku obrotu żagla.
Żagiel ma obracać się automatucznie zależnie od planowanego kierunku podróży. Aplikacja ma składać się z okna z wodą po którym ma poruszać się łódka, oraz części storującej przy której znajduje się róża wiatrów.
### 1.1. **Cel aplikacji:**
Aplikacja ma na celu symulację ruchu łódki żaglowej na wodzie, uwzględniając wpływ wiatru oraz zmieniający się kąt ustawienia żagla. Gracz ma możliwość sterowania łódką, a żagle mają automatycznie dostosowywać się do kierunku poruszania się łódki.

### 1.2. **Interfejs użytkownika:**
Aplikacja składa się z dwóch głównych obszarów:
- **Okno z wodą**: Obszar, na którym porusza się łódka. Graficznie przedstawia wodę, na której żaglówka przemieszcza się w zależności od wiatru. ```w pewnym sensie, to nie wiatr steruje łódką a sternik```
- **Część sterująca z róża wiatrów**: Obszar, w którym wyświetlana jest róża wiatrów wskazująca kierunek wiatru. Dodatkowo wyświetlany jest tekstowy opis kierunku wiatru względem łódki oraz inne wskaźniki, takie jak prędkość łódki.

### 1.3. **Interakcje:**
- **Sterowanie łódką**: Gracz może zmieniać kierunek poruszania się łódki za pomocą przycisków sterujących. W efekcie łódka zmienia kurs, a żagiel automatycznie dostosowuje swój kąt.
- **Wpływ wiatru**: Prędkość łódki i kierunek żagli zależą od siły i kierunku wiatru, który zmienia się w trakcie gry.
- **Automatyczne ustawienie żagli**: Żagle automatycznie zmieniają kąt w odpowiedzi na zmieniający się kurs łódki, optymalizując prędkość.

### 1.4. **Zmienne w grze:**
- **Kierunek wiatru**: Wiatr może wiać z różnych kierunków, co wpływa na prędkość łódki. Wiatr może zmieniać kierunek i siłę w czasie, co zmienia dynamikę rozgrywki. ```tu nie ma żadnej rozgrywki ;-)```
- **Prędkość łódki**: Zależna od kierunku i siły wiatru. Łódka może przyspieszać lub zwalniać w zależności od wiatru, a także stanie, jeśli wiatr jest zbyt słaby.
- **Ustawienie żagli**: Żagle obracają się automatycznie w odpowiedzi na zmieniający się kurs łódki, co wpływa na optymalizację prędkości. 

### 1.5. **Róża wiatrów:**
 - Róża wiatrów pokazuje aktualny kierunek wiatru względem łódki. Jest to pomocnicze narzędzie, które ułatwia graczowi określenie, jak zmienić ustawienie żagli, aby uzyskać jak największą prędkość.
 - Róża wiatrów jest zaktualizowana na podstawie rzeczywistego kierunku wiatru, który zmienia się w trakcie gry.
   ```w tym punkcie obawiam się, że jest spory bałagan i wymaga wyjaśnień, o co chodzi z wiatrem rzeczywistym i wiatrem względem łódki?```

### 1.6. **Zasady fizyki:**
- **Siła wiatru**: Wiatr z odpowiedniego kierunku (np. od tyłu) przyspiesza łódkę, a wiatr z przodu (tzw. "wiatr przedni") zmniejsza prędkość lub zatrzymuje łódkę. Prędkość łódki zależy od kąta ustawienia żagli oraz siły wiatru.
- **Prędkość łódki**: Prędkość łódki będzie dynamicznie obliczana na podstawie aktualnych warunków wiatrowych oraz ustawienia żagli. Prędkość łódki może ulegać zmianie w czasie rzeczywistym.
```ok, jakimi wzorami będzie obliczana?```

### 1.7. **Działania wymagające interakcji gracza:**
- **Zmiana kursu łódki**: Gracz może zmieniać kurs łódki, na przykład poprzez kliknięcie przycisków kierunkowych lub przesunięcie kursora w odpowiednią stronę.
- **Dostosowanie ustawienia żagli**: Gracz nie musi ręcznie ustawiać żagli, ponieważ odbywa się to automatycznie w zależności od zmiany kursu łódki. 
<hr>

<br><img src="witr.jpg" style="width: 20%; float: left "> <br><sub>Rys. 1.</sub><p>Obok róży wiatrów ma być wyświetlony kierunek NE to północnowschodni wiatr.</p> Symulacja ma uwzględniać zmianę prędkości łódki w zależności od kierunku wiatru.
## 2. Funkcje:
 - Zmiana krierunku poruszania się łódki.
 - Automatyczne obracanie żagli.
 - Obliczanie wpływu wiatru na prędkość poruszania
 - Aplikacja ma możliwość uruchomienia na Androidzie
 - Wyświetlanie kierunku wiatru na róży wiatrów oraz opisu tekstówego kierunku wiatru względem łódki zgodnie z widocznym pod spodem rysunkiem nr 2.
<br><img src="lodka.jpg" style="width: 40%; ">
<br><sub>Rys. 2.</sub>
 - obracanie łódki w zależności od wciśniętych przycisków
 - łódka przesówa się domyślnie ze stałą prędkością, która jest zależna od siły wiatru przez co łódka może stanąć lub przyśpieszyć.
 <hr>

 ```to już było opisywane wyżej```
 
## 3. Przypadki użycia
## 3.1. Przypadek użycia - Zmiana kierunku poruszania się łódki
Opis:
Gracz może zmieniać kierunek, w którym porusza się łódka, w zależności od preferencji oraz warunków wiatrowych.

Akcje:
 1. Gracz wprowadza polecenie zmiany kierunku.
 2. Aplikacja oblicza nowy kurs łódki. ```jak oblicza?```
 3. Łódka zmienia kurs na wskazany przez gracza.
 4. Róża wiatrów wyświetla zmieniony kierunek wiatru względem łódki. 
 5. Żagiel automatycznie dostosowuje swój kąt do nowego kursu.
 6. Oczekiwany rezultat:
 7. Łódka zmienia kurs, a żagiel dostosowuje się do nowego kierunku, ```w jaki sposób?``` aby optymalizować prędkość. Wskaźnik prędkości zmienia się odpowiednio do siły wiatru i ustawienia żagli.

## 3.2. Przypadek użycia - Automatyczne obracanie żagli
Opis:
Żagiel automatycznie zmienia kąt, aby zoptymalizować prędkość w zależności od kursu i siły wiatru.

Akcje:
1. Gracz zmienia kierunek poruszania się łódki.
2. Aplikacja oblicza wymagany kąt ustawienia żagla względem kierunku wiatru. ```jak oblicza?```
3. Żagiel obraca się automatycznie, dostosowując do zmienionego kursu.
4. Na róży wiatrów aktualizowany jest kierunek wiatru względem łódki.
5. Prędkość łódki jest obliczana na podstawie siły wiatru oraz ustawienia żagli. ``` w jaki sposób?```
Oczekiwany rezultat:
Żagiel jest ustawiony optymalnie, a prędkość łódki zmienia się w zależności od warunków wiatrowych. Żagiel dostosowuje się do wiatru automatycznie, aby łódka poruszała się jak najszybciej.

## 3.3. Przypadek użycia - Obliczanie wpływu wiatru na prędkość łódki
Opis:
Siła wiatru wpływa na prędkość łódki.``` w jaki sposób?```  Wiatr z różnych kierunków ma różny wpływ na poruszanie się łódki. ``` w jaki sposób?```

Akcje:
 1. Wiatr w aplikacji zmienia swój kierunek i siłę. ``` w jaki sposób?```
 2. Aplikacja oblicza prędkość łódki na podstawie siły wiatru oraz kąta ustawienia żagla. ``` w jaki sposób?```
 3. Prędkość łódki jest dynamicznie aktualizowana.
 4. Wskaźnik prędkości oraz kierunek wiatru na róży wiatrów są na bieżąco aktualizowane.
 5. Oczekiwany rezultat:
 6. Prędkość łódki zmienia się w zależności od siły wiatru oraz kierunku ustawionych żagli. Wiatr z odpowiedniego kierunku (np. z tyłu) zwiększa prędkość łódki, podczas gdy wiatr z przodu (na tzw. "wiatr przedni") powoduje spadek prędkości lub zatrzymanie łódki.

## 3.4. Przypadek użycia: Wyświetlanie kierunku wiatru na róży wiatrów
Opis:
Na róży wiatrów jest wyświetlany kierunek wiatru względem łódki, który zmienia się w zależności od aktualnych warunków wiatrowych.

Akcje:
 1. Wiatr zmienia kierunek w aplikacji. ``` w jaki sposób?```
 2. Róża wiatrów aktualizuje kierunek wiatru na podstawie jego zmiany.
 3. Obok róży wiatrów pojawia się tekstowy opis kierunku wiatru (np. "Northeast - wiatr z północnego wschodu"). ```komunikaty oczekiwane byly inne```
 4. Gra aktualizuje ustawienie żagla, dostosowując go do zmieniającego się wiatru.
 Oczekiwany rezultat:
 Róża wiatrów wskazuje aktualny kierunek wiatru, a opis w tekstowej formie pozwala graczowi na szybsze podjęcie decyzji co do ustawienia żagli i kursu łódki.

## 3.5. Przypadek użycia - Obracanie łódki w zależności od wciśniętych przycisków
Opis:
Gracz może sterować łódką, zmieniając jej kierunek poprzez obracanie za pomocą przycisków sterujących.

Akcje:
 1. Gracz wciska odpowiedni przycisk lub klawisz. ```jaki to jest odpowiedni przycisk lub klawisz? jaka jest różnica między przyciskiem a klawiszem?```
 2. Aplikacja obraca łódkę w zależności od polecenia gracza. ```jakie polecenie to jaki obrót łódki?```
 3. Róża wiatrów oraz kierunek wiatru są aktualizowane w zależności od obrotu łódki. ``` w jaki sposób?```
 4. Po obróceniu łódki, żagiel automatycznie dostosowuje swój kąt w zależności od nowego kursu. ``` w jaki sposób?```
Oczekiwany rezultat:
Łódka obraca się w zadanym kierunku, a żagiel oraz prędkość łódki zmieniają się zgodnie z nowym ustawieniem.

## 3.6. Przypadek użycia - Zmiana prędkości łódki w zależności od wiatru
Opis:
Prędkość łódki jest dynamicznie obliczana w zależności od siły wiatru oraz ustawienia żagli. ``` w jaki sposób?```

Akcje:
 1. Wiatr zmienia swoją siłę.
 2. Aplikacja przelicza aktualną prędkość łódki na podstawie zmiennej siły wiatru oraz kąta żagli. ``` w jaki sposób?```
 3. Gracz obserwuje zmieniającą się prędkość na wskaźniku prędkości oraz na mapie. ```a może nie obserwuje i co wtedy? czy my opisujemy zachowania gracza, czy aplikacji?```
 4. Łódka przyspiesza lub zwalnia w zależności od warunków atmosferycznych. ``` w jaki sposób?```
Oczekiwany rezultat:
Prędkość łódki dostosowuje się do siły wiatru. Wiatr sprzyjający przyspiesza łódkę, a wiatr z naprzeciwka spowalnia jej ruch.
<hr>

## **Podsumowanie:**
Przypadki użycia w tej symulacji łódki żaglowej koncentrują się na symulacji dynamicznego sterowania łódką, automatycznym dostosowaniu żagli oraz zmiany prędkości zależnie od wiatru.

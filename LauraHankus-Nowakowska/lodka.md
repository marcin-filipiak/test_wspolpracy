# Dokumentacja Aplikacji Mobilnej – "Łódka"

> Aplikacja mobilna "Łódka" umożliwia interaktywne sterowanie łódką na wodzie przy użyciu przycisków na ekranie lub strzałek na klawiaturze. Gra symuluje wpływ wiatru na ruch łódki, co wymaga od użytkownika odpowiedniego dostosowania sterowania. Kierunek i siła wiatru zmieniają się dynamicznie, wpływając na prędkość łódki.

## Spis Treści

1. [Funkcjonalności](#funkcjonalności)
2. [Technologie](#technologie)
3. [Instalacja](#instalacja)
4. [Scenariusze użycia](#scenariusze-użycia)

## Funkcjonalności

1. **Sterowanie łódką**: Użytkownik może poruszać łódką (w lewo, w prawo) za pomocą przycisków na ekranie lub strzałek na klawiaturze.
2. **Symulacja wiatru**: Gra generuje losowy kierunek i prędkość wiatru, które wpływają na ruch łódki.
3. **Realistyczna fizyka**: Łódka porusza się szybciej lub wolniej w zależności od kąta względem kierunku wiatru.
4. **Interakcja z wiatrem**: Gracz musi dostosować sterowanie do zmieniających się warunków wiatru, żeby efektywnie poruszać się po wodzie.

## Technologie

### .NET MAUI

## Instalacja

```bash
git clone https://github.com/danekkkk/lodka-mobile.git
```

## Scenariusze użycia

### Scenariusz 1: Generowanie kierunku i prędkości wiatru

**Aktorzy**: Użytkownik\
**Opis**: Po uruchomieniu aplikacji system generuje losowy kierunek oraz prędkość wiatru, które wpływają na warunki żeglugi. Użytkownik może analizować wpływ tych parametrów na ruch łódki.\
**Przebieg**:

1. Użytkownik otwiera aplikację.
2. Aplikacja losuje kierunek wiatru i prezentuje go na kompasie.
3. Na ekranie wyświetla się komunikat z informacją o kierunku wiatru (np. "Wiatr północno-zachodni") oraz jego prędkości w węzłach.
4. Użytkownik może rozpocząć żeglowanie, biorąc pod uwagę aktualne warunki atmosferyczne.

### Scenariusz 2: Sterowanie łódką

**Aktorzy**: Użytkownik\
**Opis**: Gracz używa interfejsu lub klawiszy do sterowania łódką, zmieniając jej kurs względem wiatru. Sterowanie wymaga dostosowania prędkości i kąta natarcia żagla, aby zoptymalizować ruch.\
**Przebieg**:

1. Użytkownik dotyka przycisku `<`, aby obrócić łódkę w lewo o 10°.
2. Użytkownik dotyka przycisku `>`, aby obrócić łódkę w prawo o 10°.
3. Zmiana orientacji jest wizualizowana poprzez animację ruchu łódki.
4. Aplikacja na bieżąco oblicza wpływ wiatru na żagiel i dostosowuje prędkość łódki.
5. Gdy łódka znajdzie się w martwym kącie, jej prędkość zostaje zredukowana do zera.

### Scenariusz 3: Dynamiczne obliczanie prędkości łódki

**Aktorzy**: Łódka\
**Opis**: Aplikacja stale aktualizuje prędkość łódki w zależności od jej kąta względem wiatru. Realistyczny model pozwala użytkownikowi eksperymentować i uczyć się zasad żeglowania.\
**Przebieg**:

1. Użytkownik ustawia łódkę pod określonym kątem względem wiatru.
2. System oblicza prędkość łódki, uwzględniając:
   - Aktualny kierunek i prędkość wiatru,
   - Kąt żagla względem wiatru,
   - Wpływ martwego kąta na ruch łódki.
3. Wynikowa prędkość jest wyświetlana w panelu kontrolnym.
4. W zależności od kąta ustawienia:
   - Największa prędkość jest osiągana przy półwietrze,
   - W martwym kącie łódka traci możliwość poruszania się.

### Scenariusz 4: Regulacja żagli

**Aktorzy**: Użytkownik\
**Opis**: Gracz może dostosować ustawienie żagli, aby poprawić efektywność żeglowania przy zmieniających się warunkach wiatrowych.\
**Przebieg**:

1. Użytkownik wybiera opcję regulacji żagla.
2. Interfejs umożliwia zmianę kąta żagla względem kadłuba łódki.
3. Aplikacja dynamicznie aktualizuje prędkość na podstawie ustawienia żagla i kąta wiatru.
4. Optymalne ustawienie żagla zwiększa efektywność żeglowania i pozwala osiągnąć większą prędkość.

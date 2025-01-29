# Symulacja Żeglowania

## Cel aplikacji:
Symulacja żeglowania ma na celu edukację użytkowników w zakresie podstawowych zasad żeglowania. Aplikacja symuluje wpływ wiatru na ruch łódki ```bardziej ustawienie żagli```, umożliwiając użytkownikowi interaktywne eksperymentowanie z kierunkiem wiatru i manewrowaniem łódką. Użytkownicy mogą lepiej zrozumieć, jak różne kierunki wiatru wpływają na prędkość i trajektorię łódki. ```zasadniczo na kurs łódki to powinien mieć wpływ sternik```

## Opis funkcjonalności:
- Aplikacja symuluje wiatr wiejący z różnych kierunków, co wpływa na sposób poruszania się łódki. W zależności od kierunku wiatru, obliczana jest prędkość łódki oraz nadawana jest odpowiednia nazwa wiatru (np. wiatr z kierunku północnego, południowego, zachodniego itp.). ```jasne jasne :-p A nie bajdewind, baksztag, fordewind?```

- Użytkownik ma możliwość obracania łódki za pomocą przycisków AD ```tylko jak caps lock włączony? się upewniam...``` (lub strzałek na klawiaturze).  Możliwe jest również kontrolowanie jej ruchu przy pomocy dedykowanych przycisków sterujących ```a co to za przyciski? gdzie one sa?```, co umożliwia manewrowanie łódką w symulacji.

- Kierunek wiatru jest losowo wybierany na początku symulacji oraz po każdorazowym naciśnięciu przycisku, który generuje nowy kierunek wiatru. ```jakim przycisku?``` Pozwala to na eksperymentowanie z różnymi warunkami żeglarskimi.

- W zależności od kierunku wiatru oraz aktualnej orientacji łódki, aplikacja oblicza jej prędkość. ```a jak ona to ma robić?``` Symulacja uwzględnia zasady fizyki żeglowania, takie jak prędkość wiatru, kąt natarcia wiatru na żagle oraz opór wody. ```no, to nie będzie łatwe ale trzymam za słowo, gdybym tylko wzory tu miał...```

-  Aplikacja oferuje ```raczej dopiero będzie oferować, tak zakładamy``` intuicyjny interfejs graficzny, który umożliwia łatwe sterowanie łódką oraz śledzenie zmieniających się warunków wiatrowych. Na ekranie widoczny jest zarówno sam ekran symulacji, jak i panel sterowania, na którym użytkownik może wybrać odpowiednie opcje sterowania.

## Diagramy kierunków wiatru
Aby lepiej zobrazować wpływ różnych kierunków wiatru na żeglowanie, poniżej znajduje się przykładowy diagram. Użytkownik może wprowadzać zmiany w położeniu łódki, dostosowując ją do zmieniających się kierunków wiatru.

<center> <img src="kierunki_wiatru.jpg" alt="Diagram Kierunków Wiatru"> </center>

# Przypadki Użycia:
### Przypadek Użycia 1: Losowanie kierunku wiatru

<b>Aktor:</b> Użytkownik<br>
<b>Opis:</b> Po uruchomieniu aplikacji użytkownik naciska przycisk, który losuje kierunek wiatru.<br>
<b>Scenariusz:</b>
- Użytkownik uruchamia aplikację.
- Aplikacja losowo generuje kierunek wiatru. ```ale to tak sama losuje? czy jednak ten przycisk mam obsługiwać? Jaki przycisk?```
- Użytkownik widzi wybrany kierunek wiatru oraz prędkość łódki. ```widzi albo nie widzi... może akurat przez okno patrzy i widzi ładne kwiaty. My tu nie piszemy co widzi użytkownik, bo tego nie wiemy, tylko co wyświetla aplikacja```
- Kierunek wiatru jest wyświetlony na ekranie.

### Przypadek Użycia 2: Sterowanie łódką

<b>Aktor:</b> Użytkownik<br>
<b>Opis:</b> Użytkownik steruje łódką, używając przycisków AD (lub strzałek) do obracania jej.<br> ``` czyli tu A z caps lock, jak będzie bez to nie obsługujemy```
<b>Scenariusz:</b>
- Użytkownik naciska klawisz A lub strzałkę w lewo, aby obrócić łódkę w lewo. ```ale ileś stopni czy jak ona się ma obracać?```
- Użytkownik naciska klawisz D lub strzałkę w prawo, aby obrócić łódkę w prawo. ```podobnie nie wiem o ile ją obracać```
- Łódka zmienia kierunek, a jej prędkość dostosowuje się do nowej orientacji. ```a ta prędkość to w jaki sposób się ma dostosować, jakiś wzór poproszę```
- Łódka zmienia kierunek i prędkość w zależności od ustawionego kierunku wiatru. ```przed chwilą zmieniła kierunek, znowu zmienia? co tu się dzieje?```

### Przypadek Użycia 3: Zmiana kierunku wiatru

<b>Aktor:</b> Użytkownik<br>
<b>Opis:</b> Użytkownik zmienia kierunek wiatru za pomocą przycisku ```cały czas jakiś magiczny przycisk, może power? :-D ```, aby zobaczyć, jak wpłynie to na prędkość łódki.<br>
<b>Scenariusz:</b> 
- Użytkownik naciska przycisk „Losuj Wiatr” ```o jakiś nowy przycisk, czyli nie power :-( nie mam takiego przycisku, to na klawiaturze gdzieś jest?```.
- Nowy kierunek wiatru jest generowany losowo ```ale jak, mam literki jakieś losować np. N, S, E, W, czy w stopniach?```.
- Aplikacja oblicza nową prędkość łódki i wyświetla ją. ```świetnie że oblicza ale jako programista muszę zaprogramować jak to ma zrobić```
- Kierunek wiatru oraz prędkość łódki są zmieniane zgodnie z nowymi warunkami wiatrowymi. ```bym się przyczepił tej prędkości jak ją obliczyć zgodnie z nowymi warunkami, ale ze starymi też nie wiedziałem jak```

### Przypadek Użycia 4: Obserwacja zmieniającej się prędkości łódki

<b>Aktor:</b> Użytkownik<br>
<b>Opis:</b> Użytkownik monitoruje zmieniającą się prędkość łódki w zależności od kierunku wiatru oraz manewrowania łódką.<br>
<b>Scenariusz:</b>
- Użytkownik steruje łódką, zmieniając jej kąt względem wiatru.
- Aplikacja oblicza prędkość łódki w czasie rzeczywistym. ```nie wiem jak obliczać```
- Użytkownik obserwuje zmieniającą się prędkość w zależności od manewrów. ```a jak sprawdzić czy użytkownik obserwuje, może detekcja ruchu gałek ocznych? a jak nie będzie obserwować to przypadek użycia ma rozumiem alternatywną ścieżkę?```
- Prędkość łódki jest wyświetlana na ekranie w zależności od jej orientacji względem wiatru.

# Planowane funkcjonalności
- Dodanie elementów takich jak fale, zmieniająca się intensywność wiatru, czy inne zmienne atmosferyczne.
- Możliwość rywalizowania z innymi użytkownikami o jak najszybsze pokonanie określonej trasy w określonych warunkach wiatrowych.

# Podsumowanie
Symulacja żeglowania to interaktywna aplikacja edukacyjna, która pomaga użytkownikom zrozumieć zasady wpływu wiatru na ruch łódki. ```po tej dokumentacji to programista nie rozumie jaki ten wpływ wiatru ma być```. Dzięki prostemu sterowaniu i losowym warunkom wiatrowym, użytkownicy mogą testować różne manewry i szybko dostrzegać, jak zmieniające się warunki wiatrowe wpływają na prędkość łódki i jej kierunek.

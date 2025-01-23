# Dokumentacja Aplikacji Mobilnej – "Łódka"

> Aplikacja mobilna "Łódka" pozwala na interaktywne sterowanie łódką na wodzie przy pomocy przycisków. Gra uwzględnia wpływ wiatru na ruch łódki. Aplikacja oferuje różne kierunki wiatru, które wpływają na ruch łódki w zależności od jej orientacji.

## Spis Treści
1. [Główne funkcjonalności](#główne-funkcjonalności)
2. [Użyte technologie](#użyte-technologie)
3. [Instalacja](#instalacja)
4. [Szczegóły działania aplikacji](#szczegóły-działania-aplikacji)
5. [Wyniki i interakcje](#wyniki-i-interakcje)
6. [Plany na przyszłość](#plany-na-przyszłość)
7. [Kontakt](#kontakt)

## Główne funkcjonalności
1. **Sterowanie łódką**: Użytkownik ma możliwość sterowania łódką w czterech kierunkach (lewo, prawo, przód, tył) za pomocą przycisków na ekranie.
2. **Wiatr**: W aplikacji pojawia się wiatr, którego kierunek jest generowany losowo.
3. **Ruch łódki**: W zależności od kierunku wiatru, łódka może poruszać się w sposób bardziej dynamiczny lub wolniejszy.
4. **Podstawowe kierunki wiatru**: Wiatr może przybierać jeden z podstawowych kierunków, które są wyświetlane na ekranie i mają wpływ na ruch łódki.
5. **Interakcja z wiatrem**: Użytkownik musi dostosować ruchy łódki w zależności od zmieniającego się kierunku wiatru.

![Alt text](https://www.charter.edu.pl/uploaded_files/image/baza-wiedzy/obraz5312972429_m.jpg)

## Użyte technologie
#### .NET MAUI

## Instalacja
```
git clone https://github.com/danekkkk/lodka-mobile.git
```

## Szczegóły działania aplikacji
Przyciski sterujące: Użytkownik może kontrolować ruch łódki w czterech kierunkach:
1. Przód (do przodu) – łódka porusza się do przodu.
2. Tył (do tyłu) – łódka porusza się do tyłu.
3. Lewo – łódka skręca w lewo.
4. Prawo – łódka skręca w prawo.
   
**Wiatr**: Wiatr wpływa na łódkę w sposób dynamiczny. Zmiana kierunku wiatru powoduje zmianę prędkości łódki, przyspieszając lub spowalniając jej ruch.

## Kierunki wiatru
Aplikacja uwzględnia kilka podstawowych kierunków wiatru, które wpływają na poruszanie się łódki:
1. Północ (N) – Wiatr wieje z północy, zmieniając prędkość łódki w kierunku przeciwnym do jej ruchu.
2. Południe (S) – Wiatr wieje z południa, przyspieszając ruch łódki w kierunku przeciwnym do wiatru.
3. Wschód (E) – Wiatr wieje ze wschodu, powodując, że łódka porusza się w stronę wschodnią.
4. Zachód (W) – Wiatr wieje z zachodu, wpływając na poruszanie się łódki w stronę zachodnią.
5. Północny-wschód (NE) – Wiatr z kierunku północno-wschodniego, wpływający na oba kierunki jednocześnie.
6. Południowy-zachód (SW) – Wiatr z kierunku południowo-zachodniego, wpływający na oba kierunki w tym samym czasie.
7. Północno-zachodni (NW) - Wiatr z kierunku północno-zachodniego, wpływający na oba kierunki jednocześnie.
8. Południowo-wschodni (SE) - Wiatr z kierunku południowo-wschodniego, wpływający na oba kierunki jednocześnie.

## Wyniki i interakcje
W trakcie korzystania z aplikacji, użytkownik ma możliwość obserwowania wpływu wiatru na poruszanie się łódki. Zmieniający się kierunek wiatru może powodować przyspieszenie lub opóźnienie ruchu łódki, co wymaga od użytkownika szybkiej reakcji na zmiany warunków.

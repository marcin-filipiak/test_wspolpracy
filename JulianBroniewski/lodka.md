# Specyfikacja funkcjonalna aplikacji Sailing Simulator

## 1. Wstęp
Dokument opisuje wymagania funkcjonalne dla aplikacji Sailing Simulator. Przeznaczony jest dla osoby, która na jego podstawie mają zaimplementować oprogramowanie.

## 2. Cel systemu
Głównym celem aplikacji jest możliwie najbardziej realistyczna symulacja ruchu łódki żaglowej po powierzchni wody, w zależności od kierunku wiatru i położenia łódki.

## 3. Zakres funkcjonalny
Aplikacja zawiera następujące funkcjonalności:
- Kierunek wiatru – moduł odpowiedzialny za wybieranie losowego kierunku wiatru.
- Sterowanie łódką – moduł odpowiedzialny za ruch łódki.
- Manipulacja żaglami – moduł odpowiedzialny za zmianę położnia żagli łódki.
- Interfejs użytkownika - moduł odpowiedzialny za wyświetlanie na interfejsie przydatnych dla użytkownika informacji.

## 4. Wymagania funkcjonalne
### 4.1. Kierunek wiatru
Moduł odpowiada za wybór losowego kierunku wiatru z zakresu od 1° do 360°.

### 4.2. Sterowanie łódką
Moduł odpowiada za kontrolowanie położenia łódki.
- Skręcanie: użytkownik może obracać łódką, używając przycisków znajdujących się na interfejsie.
- Prędkość: aplikacja dostosowywuje prędkość łódki w zależności od jej położenia względem kierunku wiatru.
- Przemieszczanie: aplikacja porusza łódką w kierunku wybranym przez użytkownika i z prędkością zależną od położenia łódki względem wiatru.

### 4.3. Manipulacja żaglami
Moduł odpowiada za kontrolowanie pozycji 2 żagli na łódce w zależności od jej położenia względem wiatru.
- Dziobem do wiatru: żagle powiewają swobodnie do tyłu łódki.
- Rufą do wiatru: 2 żagle znajdują się po przeciwnych burtach łódki.
- Bokiem do wiatru: oba żagle znajdują się po przeciwnej burcie niż ta skierowana na wiatr.

### 4.4. Interfejs użytkownika
Moduł odpowiada za wyświetlenie na interfejsie użytkownika informacji na temat wiatru i łódki oraz kontrolek do sterowania łódką.
- Sterowanie łódką: aplikacja wyświetla na interfejsie przyciski do obracania łódki w lewo i w prawo.
- Kierunek wiatru: aplikacja wyświetla na interfejsie informację o kierunku wiatru w formie graficznej oraz liczbowej.
- Położenie łódki: aplikacja wyświetla na interfejsie napis mówiący, w jakim położeniu względem wiatru znajduje się łódka (np. fordewind, baksztag, hals).

## 5. Przypadki użycia
| PRZYPADEK 1    | Aplikacja Sailing Simulator |
| -------------- | --------------------------- |
| AKTOR          | Osoba używająca aplikacji.  |
| CEL            | Użytkownik chce ustawić łódkę w symulacji tak, aby płynęła z wiatrem, przy wietrze o kierunku 270°. |
| PRZEBIEG       | 1. Użytkownik otwiera aplikację. <br> 2. Aplikacja losuje kierunek wiatru na 270°. <br> 3. Aplikacja wyświetla interfejs. <br> 4. Użytkownik klika przyciski, aby obrócić łódkę w pożądanym kierunku. <br> 5. Aplikacja obraca łódkę w kierunku, jaki nadał użytkownik. <br> 6. Kiedy łódka jest ustawiona tyłem do wiatru, płynie szybciej. <br> 7. Im szybciej płynie łódka, tym większy posiada promień skrętu |

Tab.1.

| PRZYPADEK 2    | Aplikacja Sailing Simulator |
| -------------- | --------------------------- |
| AKTOR          | Osoba używająca aplikacji.  |
| CEL            | Użytkownik chce ustawić łódkę w symulacji tak, aby płynęła pod wiatr, przy wietrze o kierunku 270°. |
| PRZEBIEG       | 1. Użytkownik otwiera aplikację. <br> 2. Aplikacja losuje kierunek wiatru na 270°. <br> 3. Aplikacja wyświetla interfejs. <br> 4. Użytkownik klika przyciski, aby obrócić łódkę w pożądanym kierunku. <br> 5. Aplikacja obraca łódkę w kierunku, jaki nadał użytkownik. <br> 6. Kiedy łódka jest ustawiona pod wiatr, zwalnia. <br> 7. Po pewnym czasie łódka zatrzymuje się. Użytkownik nadal jest w stanie nią obracać, nie może ona jednak nabrać prędkości, dopóki jest skierowana w tzw. kącie martwym. |

Tab.1.


## 6. Technologie i ograniczenia
- Technologia: .NET MAUI
- Języki: XAML, C#
- Inne wymagania: grafika rastrowa

## 7. Inne uwagi
- Interfejs aplikacji w języku angielskim.
- Aplikacja powinna umożliwiać łatwą rozbudowę o kolejne moduły.

## Autor
[Julian Broniewski](https://github.com/Julian9B)

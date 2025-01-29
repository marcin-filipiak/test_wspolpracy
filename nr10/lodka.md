# Dokumentacja Funkcjonalna Symulatora Żaglówki
# 1. Wstęp
Dokument opisuje wymagania funkcjonalne do symulatora żaglówki. Przeznaczony jest dla zespołu programistów, którzy na jego podstawie mają zaimplementować oprogramowanie.
# 2. Cel aplikacji
Aplikacja ma pozwolić na symulowanie kierowania żaglówką ze zmieniającymi się warunkami wiatru takimi jak kierunek czy prędkość.
# 3. Zakres funkcjonalny
System będzie składał się z następujących modułów:
- **Moduł obiektu silnika** - odpowiedzialny za renderowanie obiektów takich jak żaglówka na elemencie html ``<canvas>``
- **Moduł wiatru** - odpowiedzialny za symulowanie wiatru i jego zmiennych warunków
# 4. Wymagania funkcjonalne
## 4.1 Moduł obiektu silnika
Opis:
- klasa do obsługi obiektu zawierająca pola takie jak wielkość, pozycja, obrót
- Funkcje do przesuwania obiektów po canvasie
## 4.2 Moduł wiatru
Opis:
- klasa wiatru
- zmieniające się w czasie rzeczywistym warunki wiatru
- możliwośc dostosowania warunków wiatru przez użytkownika
# 5. Przypadki użycia
## 5.1 Symulacja standardowych warunków wiatru
Aktor: Użytkownik aplikacji (człowiek)
Opis: Użytkownik uruchamia symulator z domyślnymi ustawieniami wiatru.
Kroki:
1. Użytkownik uruchamia aplikację.
2. System inicjalizuje żaglówkę na canvasie.
3. System ustawia domyślne warunki wiatru.
4. Użytkownik steruje żaglówką w symulowanych warunkach.
## 5.2 Dostosowanie warunków wiatru
Aktor: Użytkownik aplikacji (człowiek)
Opis: Użytkownik dostosowuje warunki wiatru, takie jak kierunek i prędkość.
Kroki:
1. Użytkownik uruchamia aplikację.
2. System inicjalizuje żaglówkę na canvasie.
3. Użytkownik otwiera menu ustawień wiatru.
4. Użytkownik dostosowuje kierunek i prędkość wiatru.
5. System aktualizuje warunki wiatru w czasie rzeczywistym.
6. Użytkownik steruje żaglówką w zmienionych warunkach wiatru.
## 5.3 Zapis i wczytanie konfiguracji symulacji
Aktor: Użytkownik aplikacji (człowiek)
Opis: Użytkownik zapisuje bieżącą konfigurację symulacji i wczytuje ją później.
Kroki:
1. Użytkownik uruchamia aplikację.
2. System inicjalizuje żaglówkę na canvasie.
3. Użytkownik dostosowuje warunki wiatru.
4. Użytkownik zapisuje bieżącą konfigurację.
5. Użytkownik zamyka i ponownie uruchamia aplikację.
6. Użytkownik wczytuje zapisaną konfigurację.
7. System przywraca zapisane ustawienia wiatru i położenie żaglówki.
8. Użytkownik kontynuuje symulację.
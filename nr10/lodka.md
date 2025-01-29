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
- klasa wiatru
- zmieniające się w czasie rzeczywistym warunki wiatru
- możliwośc dostosowania warunków wiatru przez użytkownika
# 5. Przypadki użycia

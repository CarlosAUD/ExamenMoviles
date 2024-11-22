import { Component, OnInit } from '@angular/core';
import { DatosService } from '../../services/datos.service';  
import { Firestore, collection, addDoc } from '@angular/fire/firestore';

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.page.html',
  styleUrls: ['./app-list.page.scss'],
})
export class AppListPage implements OnInit {
  bookList: { title: string; image: string }[] = [];

  constructor(private datosService: DatosService, private firestore: Firestore) {}

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.bookList = [];  // Limpiar la lista de libros

    this.datosService.getBooks().subscribe((response) => {
      const books = response.results; // Suponiendo que 'results' contiene la lista de libros

      books.forEach((book: { title: string }, index: number) => {
        const isDogImage = Math.random() > 0.5;  // Aleatoriamente elegir entre perro o robot
        const title = book.title;

        if (isDogImage) {
          this.datosService.getRandomDogImage().subscribe((response) => {
            if (response.message) {
              this.bookList.push({ title, image: response.message });
            }
          });
        } else {
          // Construir el identificador para la imagen de robot
          this.datosService.getRandomRobotImage(`robot${index}`).subscribe((blob) => {
            const imageUrl = URL.createObjectURL(blob);  // Crear URL para la imagen del robot
            this.bookList.push({ title, image: imageUrl });
          });
        }
      });
    });
  }

  saveBook(book: { title: string; image: string }) {
    const booksCollection = collection(this.firestore, 'books');
    addDoc(booksCollection, book)
      .then(() => {
        console.log('Book added to Firestore');
      })
      .catch((error) => {
        console.error('Error adding book: ', error);
      });
  }
}

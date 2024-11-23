import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { Firestore, collection, addDoc } from '@angular/fire/firestore';
import { inject } from '@angular/core'; // Agregar esto para usar la inyección de dependencias

@Component({
  selector: 'app-app-list',
  templateUrl: './app-list.page.html',
  styleUrls: ['./app-list.page.scss'],
})
export class AppListPage implements OnInit {
  bookList: { title: string; image: string }[] = [];

  // Cambié la inyección de Firestore para que sea compatible con la nueva API
  firestore: Firestore = inject(Firestore);

  constructor(private apiService: ApiService) {}

  ngOnInit() {
    this.loadBooks();
  }

  loadBooks() {
    this.bookList = [];

    this.apiService.getBooks().subscribe((response) => {
      const books = response.results;

      books.forEach((book: { title: string }, index: any) => {
        const isDogImage = Math.random() > 0.5;
        const title = book.title;

        if (isDogImage) {
          this.apiService.getRandomDogImage().subscribe((response) => {
            this.bookList.push({ title, image: response.message });
          });
        } else {
          this.apiService.getRandomRobotImage(`robot${index}`).subscribe((blob) => {
            const imageUrl = URL.createObjectURL(blob);
            this.bookList.push({ title, image: imageUrl });
          });
        }
      });
    });
  }

  saveBook(book: { title: string; image: string }) {
    // Asegúrate de que estás usando la función correcta para acceder a la colección
    const booksCollection = collection(this.firestore, 'books');
    addDoc(booksCollection, book).then(() => {
      console.log('Book added to Firestore');
    }).catch((error) => {
      console.error('Error adding book: ', error);
    });
  }
}

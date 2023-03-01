import {Book} from './interfaces';
import {Category} from './enums';
import {getBooksByCategory, getBooksByCategoryPromise, logCategorySearch, logSearchResults} from './functions';


showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}
// ==========================================



// Task 02.01
// console.log(getAllBooks());
// logFirstAvailable();
// console.log(getBookTitlesByCategory(Category.JavaScript));
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));
// console.log(getBookAuthorByIndex(1));
// console.log(calcTotalPages());

// Task 03.02
// createCustomer('Anna');
// createCustomer('Anna', 30);
// createCustomer('Anna', 30, 'Kyiv');
// console.log(getBookTitlesByCategory());
// logFirstAvailable();
// console.log(getBookByID(1));
// const myBooks = checkoutBooks('Ann', 1,2,4);
// console.log(myBooks);

// Task 03.03
// getTitles(1, true);
// console.log(getTitles(1, true));

// Task 03.04
// console.log(bookTitleTransform('TypeScript'));
// console.log(bookTitleTransform(123));

// Task 04.01
// const  myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     pages: 200,
//     markDamaged(reason: string): void {
//         console.log(`Damaged: ${reason}`);
//     }
// };
// printBook(myBook);
// myBook.markDamaged('missing back cover');

// Task 04.02
// const logDamage: Logger = (reason: string): void => {
//     console.log(`Damaged: ${reason}`);
// };
// logDamage('missing back cover');


// Task 04.03
// const favoriteAuthor: Author = {
//     name: 'Anna',
//     email: 'anna@example.com',
//     numBooksPublished: 1
// };
//
// const favoriteLibrarian: Librarian = {
//     name: 'Boris',
//     email: 'boris@example.com',
//     department: 'Classical',
//     assistCustomer: null
// };

// Task 04.04
// const offer: any = {
//     book: {
//         title: 'Essential TypeScript',
//     },
// };
// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.authors?.[0]);


// Task 04.05
// console.log(getProperty(myBook, 'title'));
// getProperty(myBook, 'markDamaged');
// getProperty(myBook, 'isbn');

// TAsk 05.01

// const ref = new ReferenceItem(1, 'TypeScript', 2023);
// ref.printItem();
// ref.publisher = 'abc';
// console.log(ref);
// console.log(ref.getID());

// Task 05.02, 05.03
// const refBook = new RefBook(1, 'TypeScript', 2023, 2);
// console.log(refBook);
// refBook.printItem();
// refBook.printCitation();

// Task 05.04

// const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris', 'Learn TypeScript');
// favoriteLibrarian.a = 2;

// TAsk 05.05

// const personBook: PersonBook = {
//     author: 'Anna',
//     available: false,
//     category: Category.Angular,
//     email: 'anna@example.com',
//     id: 1,
//     name: 'Anna',
//     title: 'Unknown'
// };

// const config: TOptions = {duration: 100};
// console.log(setDefaultConfig(config));

// task 06.03
// printRefBook(new RefBook(1, 'TypeScript', 2023, 2));
// printRefBook(new UL.UniversityLibrarian());

// Task 06.05

// const flag = false;
// if(flag) {
//     import('./classes')
//         .then(obj => {
//             const reader = new obj.Reader();
//             reader.name = 'Anna';
//             console.log(reader);
//         }).catch(err => console.log(err));
// }
//
// if(!flag) {
//     const obj = await import('./classes');
//     const reader = new obj.Reader();
//     reader.name = 'Boris';
//     console.log(reader);
// }


// Task 06.06

// let lib: Library = new Library();
// let lib: Library = {
//     name: 'Anna',
//     id: 1,
//     address: ''
// };

// Task 07.01
const inventory: Book[] = [
    { id: 10, title: 'The C Programming Language', author: 'K & R', available: true, category: Category.Software },
    { id: 11, title: 'Code Complete', author: 'Steve McConnell', available: true, category: Category.Software },
    { id: 12, title: '8-Bit Graphics with Cobol', author: 'A. B.', available: true, category: Category.Software },
    { id: 13, title: 'Cool autoexec.bat Scripts!', author: 'C. D.', available: true, category: Category.Software }
];
// const r1: Book[] = purge(inventory);
// console.log(r1);
// const r2: number[] = purge<number>([1,2,3,4]);
// console.log(r2);

// Task 07.02, 07.03

// const bookShelf = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst());
//
// const magazines: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' }
// ];
//
// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(mag => magazineShelf.add(mag));
// console.log(magazineShelf.getFirst());
//
// magazineShelf.printTitles();
//
// console.log(magazineShelf.find('Five Points'));
// console.log(getObjectProperty(magazines[0], 'title'));
// console.log(getObjectProperty(inventory[0], 'author'));
// console.log(getObjectProperty(10, 'toFixed'));

// Task 07.04

// const bookRequiredFields: BookRequiredFields = {
//     id: 1,
//     author: 'Anna',
//     available: false,
//     category: Category.Angular,
//     markDamaged: null,
//     pages: 200,
//     title: 'Unknown'
// };
//
// const updatedBook: UpdatedBook = {
//     id: 1
// };
//
// let params: Parameters<СreateCustomerFunctionType>;
// params = ['Anna', 30, 'Kyiv'];
// createCustomer(...params);

// Task 08.01, 08.02, 08.03

// const ul = new UL.UniversityLibrarian();
// UL.UniversityLibrarian['a'] = 123;
// Object.getPrototypeOf(ul)['b'] = 123;
// console.log(ul);
// ul.name = 'Anna';
// ul['printLibrarian']();
//
// (ul as UL.UniversityLibrarian & pl).printLibrarian();
//
// type pl = {printLibrarian: () => void};

// Object.getPrototypeOf(ul).assistFaculty = null;
// Object.getPrototypeOf(ul).teachCommunity = null;

// Task 08.04

// const ref = new RefBook(1, 'TypeScript', 2023, 2);

// Task 08.05, 08.06
// const ul = new UL.UniversityLibrarian();
// ul.name = 'Anna';
// ul.name = 'Anna';
// ul.assistCustomer('Boris', 'Learn Typescript');
// console.log(ul);
// console.log(ul);

// 08.07

// const ref = new RefBook(1, 'TypeScript', 2023, 2);
// ref.copies = 10;
// console.log(ref);

// Task 09.01

// console.log('Begin');
// getBooksByCategory(Category.JavaScript, logCategorySearch);
// getBooksByCategory(Category.Software, logCategorySearch);
// console.log('End');

// Task 09.02
// console.log('Begin');
// getBooksByCategoryPromise(Category.JavaScript)
//     .then(titles => {
//         console.log(titles);
//         return titles.length + 1;
//     })
//     .then(len => console.log(len))
//     .catch(reason => console.log(reason));
//
// getBooksByCategoryPromise(Category.Software)
//     .then(titles => console.log(titles))
//     .catch(reason => console.log(reason));
// console.log('End');


// Task 09.03

console.log('Begin');
logSearchResults(Category.JavaScript);
logSearchResults(Category.Software)
    .catch(err => console.log(err));
console.log('End');


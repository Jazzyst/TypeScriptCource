/* eslint-disable no-redeclare */
import {Book, Callback, LibMgrCallback, TOptions} from './interfaces';
import {Category} from './enums';
import {BookOrUndefined, BookProperties} from './types';
import RefBook from './classes/encyclopedia';

export function getAllBooks(): readonly Book[] {
    const books: readonly Book[] = <const> [
        { id: 1, title: 'Refactoring JavaScript', author: 'Evan Burchard', available:
        true, category: Category.JavaScript},
        { id: 2, title: 'JavaScript Testing', author: 'Liang Yuxian Eugene', available:
        false, category: Category.JavaScript },
        { id: 3, title: 'CSS Secrets', author: 'Lea Verou', available: true, category: Category.CSS },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', author:
        'Andrea Chiarelli', available: true, category: Category.HTML }
    ];

    return books;
}

export function logFirstAvailable(books: readonly Book[] = getAllBooks()): void {
    const numberOfBooks: number = books.length;
    const firstAvailable: string = books.find(book => book.available)?.title;

    console.log(`Total Books ${numberOfBooks}`);
    console.log(`First Available ${firstAvailable}`);
}

export function getBookTitlesByCategory(categoryFilter: Category = Category.JavaScript): string[] {
    const books = getAllBooks();
    return books.filter(({category}) => category === categoryFilter).map(({title}) => title);
}

export const logBookTitles = (titles: string[]): void => console.log(titles);

export function getBookAuthorByIndex(index: number): [title: string, author: string] | undefined {
    const books = getAllBooks();
    const book = books[index];

    if (!book) return undefined;
    const {title, author} = book;

    return [title, author];
}


export const calcTotalPages = (): bigint => {
    const libraries = <const>[
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }
    ];

    return libraries.reduce((acc, {books, avgPagesPerBook}) => {
        return acc + (BigInt(books) * BigInt(avgPagesPerBook));
    }, 0n);
};

// =================================== lesson 2 =====================

// Task 03.01

export function createCustomerID(name: string, id: number): string {
    return `${id}-${name}`;
}

// let myID: string = createCustomerID('Ann', 10);
// console.log(myID);
// let idGenerator: (name: string, id: number) => string;
// idGenerator = (name: string, id: number) => `${id}-${name}`;
// idGenerator = createCustomerID;
// console.log(idGenerator('Ann', 10));
//
// let a: typeof createCustomerID;
// let b = typeof  '';

// Task 03.02

export function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Customer name: ${name}`);

    if(age) {
        console.log(`Customer age: ${age}`);
    }

    if(city) {
        console.log(`Customer city: ${city}`);
    }
}

export function getBookByID(pid: Book['id']): BookOrUndefined {
    const books = getAllBooks();
    return  books.find(({id}) => id === pid);
}

export function checkoutBooks(customer: string, ...bookIDs: number[]): string[] {
    console.log(`Customer: ${customer}`);

    return bookIDs.map(id => getBookByID(id)).filter(({available}) => available).map(({title}) => title);
}

export function  getTitles(author: string): string[];
export function  getTitles(available: boolean): string[];
export function  getTitles(id: number, available: boolean): string[];
export function  getTitles(...args: [string | boolean] | [number, boolean]): string[] {
    const books = getAllBooks();

    if(args.length === 1) {
        const [arg] = args;

        if (typeof  arg === 'string') {
            return  books.filter(({author}) => author === arg).map(({title}) => title);
        } else if (typeof  arg === 'boolean') {
            return  books.filter(({available}) => available === arg).map(({title}) => title);
        }
    } else if (args.length === 2) {
        const [id, available] =  args;

        if(typeof  id === 'number' && typeof  available === 'boolean') {
            return  books.filter((book) => book.available === available && book.id === id).map(({title}) => title);
        }
    }

    return [];
}

// ===================== Lesson 3 =======================

export function assertStringValue(value: any): asserts value is string {
    if (typeof value !== 'string') {
        throw  new Error('value should have been a string');
    }
}

export function assertRefBookInstance(condition: any): asserts condition {
    if(!condition) {
        throw  new Error('It is not an instance of RefBook');
    }
}

export function bookTitleTransform(title: any): string {
    assertStringValue(title);

    return [...title].reverse().join('');
}

export function printBook(book: Book): void {
    console.log(`${book.title} by ${book.author}`);
}

export function printRefBook(data: any): void {
    assertRefBookInstance(data instanceof RefBook);
    data.printItem();
}

// ============= lesson 4 ==================

export function  getProperty(book: Book, prop: BookProperties | 'isbn'): any {
    const value = book[prop];
    return typeof  value === 'function' ? value.name : value;
}

export function  getObjectProperty<TObject, TKey extends keyof TObject>(obj: TObject, prop: TKey): TObject[TKey] | string {
    const value = obj[prop];
    return typeof  value === 'function' ? value.name : value;
}

export function setDefaultConfig(options: TOptions): TOptions {
    options.duration ??= 200;
    options.speed ??= 90;
    return options;
}

export function purge<T>(inventory: Array<T>): T[] {
    return inventory.slice(2);
}

export  function getBooksByCategory(category: Category, callback: LibMgrCallback): void {
    setTimeout(() => {
        try{
            const titles = getBookTitlesByCategory(category);
            if(titles.length > 0) {
                callback(null, titles);
            } else {
                throw new Error('No books found');
            }
        } catch(err){
            callback(err, null);
        }
    }, 2000);
}
// export  function getBooksByCategory(category: Category, callback: Callback<string[]>): void

export function logCategorySearch(err: Error | null, titles: string[] | null): void {
    if(err) {
        console.log(err.message);
    } else {
        console.log(titles);
    }
}

export function getBooksByCategoryPromise(category: Category): Promise<string[]> {
    return new Promise<string[]>((resolve, reject) => {
        setTimeout(() => {
            const titles = getBookTitlesByCategory(category);
            if(titles.length > 0) {
                resolve(titles);
            } else {
                reject('No books found');
            }
        }, 2000);
    });
}

export async  function logSearchResults(category: Category) {
    const results: Awaited<Promise<string[]>> = await getBooksByCategoryPromise(category);
    console.log(results);
}
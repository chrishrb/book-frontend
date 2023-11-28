/**
 * Book-API
 * 0.0.1
 * DO NOT MODIFY - This file has been generated using oazapfts.
 * See https://www.npmjs.com/package/oazapfts
 */
import * as Oazapfts from "oazapfts/lib/runtime";
import * as QS from "oazapfts/lib/runtime/query";
export const defaults: Oazapfts.RequestOpts = {
    baseUrl: "/",
};
const oazapfts = Oazapfts.runtime(defaults);
export const servers = {};
export type BaseBook = {
    title: string;
    authors: string;
    description: string;
    pages?: number;
};
export type ListBooks = BaseBook[];
export type Error = {
    statusCode?: number;
    details?: string;
};
export type Book = BaseBook & {
    id: string;
};
/**
 * List books
 */
export function getBooks(opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: ListBooks;
    } | {
        status: 500;
        data: Error;
    }>("/books", {
        ...opts
    });
}
/**
 * Create book
 */
export function createBook(baseBook: BaseBook, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 201;
        data: Book;
    } | {
        status: 500;
        data: Error;
    }>("/books", oazapfts.json({
        ...opts,
        method: "POST",
        body: baseBook
    }));
}
/**
 * CORS support
 */
export function optionsBooks(opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText("/books", {
        ...opts,
        method: "OPTIONS"
    });
}
/**
 * Get book by id
 */
export function getBook(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: Book;
    } | {
        status: 404;
        data: Error;
    } | {
        status: 500;
        data: Error;
    }>(`/books/${encodeURIComponent(id)}`, {
        ...opts
    });
}
/**
 * Delete book by id
 */
export function deleteBook(id: string, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 204;
    } | {
        status: 500;
        data: Error;
    }>(`/books/${encodeURIComponent(id)}`, {
        ...opts,
        method: "DELETE"
    });
}
/**
 * Update book by id
 */
export function updateBook(id: string, baseBook: BaseBook, opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchJson<{
        status: 200;
        data: Book;
    } | {
        status: 404;
        data: Error;
    } | {
        status: 500;
        data: Error;
    }>(`/books/${encodeURIComponent(id)}`, oazapfts.json({
        ...opts,
        method: "PUT",
        body: baseBook
    }));
}
/**
 * CORS support
 */
export function optionsBooksById(opts?: Oazapfts.RequestOpts) {
    return oazapfts.fetchText(`/books/${encodeURIComponent(id)}`, {
        ...opts,
        method: "OPTIONS"
    });
}

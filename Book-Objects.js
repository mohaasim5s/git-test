function Books(bookname, author, pages, cstatus) {
    this.bookname = bookname
    this.author = author
    this.pages = pages
    this.cstatus = cstatus
    
    this.info = function() {
        return bookname+" by "+author+", "+pages+", "+cstatus
    }
}

const theHobbit = new Books('The Hobbit','J R R Tolkien','295 pages','not read yet')
const HarryPotter = new Books('The Harry','Rowiling','295 pages','ead')

console.log(theHobbit.info());
console.log(HarryPotter.info());


export default function BookList() {
   let pageTitle = "Latest Book Releases";
   let book1 = "https://m.media-amazon.com/images/I/81qPLzjubcL._AC_UF1000,1000_QL80_.jpg";
   let book2 = "https://m.media-amazon.com/images/I/8193QJlUHzL._AC_UF894,1000_QL80_.jpg";
   let book3 = "https://m.media-amazon.com/images/I/51p9m5aT83L.jpg";

   return (
      <div>
         <h3>{pageTitle}</h3>
         <img src={book1} width="200" height="300" alt="Romantic Comedy by Curtis Sittenfield" />
         <img src={book2} width="200" height="300" alt="Tress of the Emerald Sea by Brandon Sanderson" />
         <img src={book3} width="200" height="300" alt="The London Seance Society by Sarah Penner" />
      </div>
   );
}
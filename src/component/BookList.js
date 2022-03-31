import React from "react";
import Book from "./Book";
import './BookList.css'
import { BookContext } from "../contexts/BookContext";
import { ThemeContext } from "../contexts/ThemeContext";

class BookList extends React.Component{
    
    //static contextType= BookContext; //static bir sınıfa ait metot veya özelllik tanımlar 

    render(){

        //const books=this.context
        //console.log("context",books)

        // const bookList= books.map((book,i)=>{
        //     return( <Book
        //         book={book}
        //         key={i}
        //         />
        //     )
        // })
        return(
            <ThemeContext.Consumer>
                {contextTheme=>{
                    return(
                        <BookContext.Consumer>
                            {contextBook=>{
                               // const{ books} =  contextBook
                                const {changeTheme,isDarkTheme, dark ,light} =contextTheme;
                                const theme=isDarkTheme? dark :light;
                        
                            return(
                                <section className="page-section"  id="portfolio" style={{background:theme.bg,color:theme.txt}}> 
                                <div className="container" >
                                    <div className="text-center">
                                        <h2 className="section-heading text-uppercase" >Bookfolio</h2>
                                        <h3 className="section-subheading text-muted" >Lorem ipsum dolor sit amet.</h3>
                                        <button type="button" className="btn btn-warning mb-2" onClick={changeTheme}>Change Button</button>
                                    </div> 
                                    <div>
                                        
                                    </div>
                                    <div className="row">
                                        {/* {bookList} */}
                                        {contextBook.books.map((book,i)=>{
                                             return( <Book
                                                 book={book}
                                                 key={i}
                                                 />
                                             )
                                         })}
                                    </div>
                                </div>
                                   
                               </section>
                
                            )
                        }}
        
                    </BookContext.Consumer>
                    )
                       
                }}
            </ThemeContext.Consumer>
            
         
     
        )
    }
}

export default BookList;





// return(
//     <div>
//     {this.props.books.map((book)=><p>{book.title}</p> )}
//     </div> 
// )

// return (
//     <div>
//         {this.props.books.map((book)=>(
               
//                     <p>{book.title}</p> 
            
//             ))
//         }
//     </div>
// )


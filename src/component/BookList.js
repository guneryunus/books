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
                            {value1=>{
                                // const{ books} =  value1
                                const {isDarkTheme, dark ,light} =contextTheme;
                                const theme=isDarkTheme? dark :light;
                        
                            return(
                                <section className="page-section" style={{background:theme.bg}} id="portfolio"> 
                                <div className="container">
                                    <div className="text-center">
                                        <h2 className="section-heading text-uppercase" style={{color:theme.txt}}>Bookfolio</h2>
                                        <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet.</h3>
                                    </div> 
                                    <div className="row">
                                        {/* {bookList} */}
                                        {value1.books.map((book,i)=>{
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


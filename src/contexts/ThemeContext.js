import React from "react";

export const ThemeContext = React.createContext();

class ThemeContextProvider extends React.Component{

    constructor(){
        super();
        this.state={
            isDarkTheme:true,
            dark :{bg:"#222529", txt:"#D65F5f", hover:"rgba(231, 76 ,60, 0.8)",titleColor:"#ffffff"},
            light:{bg:"#ffffff",  txt:"#222529", hover:"rgba(254, 209, 54, 0.8)",
            titleColor:"#222529"}
            
        }
    }

    changeTheme=()=>{
        this.setState({isDarkTheme:!this.state.isDarkTheme})
        console.log(this.state.isDarkTheme)
    }

render(){
    return(
            <ThemeContext.Provider value={{...this.state,changeTheme:this.changeTheme}}>
                {this.props.children}
            </ThemeContext.Provider>
    )
    //value={{...this.state}} --> ... spread operatörü bu (yaymak demek) ve this.state ile objemizi kopyalarken kullanırız **
}

}

export default ThemeContextProvider;

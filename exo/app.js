import { Header } from "./components/head.js";
import { Nav } from "./compenents/Nav.js";
import { Main } from "./components/main.js";
import { Footer } from "./components/footer.js";
let App = {  
    components : {  
      Header, Main, Footer
    }, 

    template: `  
    <Header/>
    </Nav>
    <Main/>

    <Footer/>

    `  
};  
  
export { App };
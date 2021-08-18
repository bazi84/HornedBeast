import beastImages from './beastData.json'
import Header from './header.js';
import Footer from './footer.js';
import Main from './main.js';

function App() {
  console.log(beastImages);
  return ( 
    <>
      <Header title= "Horned Beasts"/>
      <Main hornedBeast= {beastImages}/>
      <Footer author= "Abdulkadir Sheikh"/>
    </>
    
  );
  } 
  
export default App;

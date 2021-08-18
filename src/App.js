import './App.css';
import beastImages from './data.json'
import Header from './header.js';
import Footer from './footer.js';
import Main from './main.js';

function App() {
  return (
    <>
      <Header title= "Horned Beasts"/>
      {/* <Main message="beastImages"/> */}
      <Footer author= "Abdulkadir Sheikh"/>
    </>
  );
  } 
    
  class BeastImage extends Component {
    render() {
      return <img src={this.props.Image_url} alt="Honred Beast" />
    }
  }

export default App;

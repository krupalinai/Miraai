import React from 'react';
import Supportingline from './Component/Supportingline';
import UsesMiraai from './Component/UsesMiraai';
import BusinessesChooseMiraai from './Component/BusinessesChooseMiraai';
import Creativerevisualization from './Component/Creativerevisualization';
import Aidesigngenration from './Component/Aidesigngenration';
import Whatourclientssay from './Component/whatourclientssay';
import Calltoaction from './Component/Calltoaction';
import Frequentlyaskedquestions from './Component/Frequentlyaskedquestions';
import Footer from './Component/Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Supportingline />
      <UsesMiraai />
      <BusinessesChooseMiraai />
      <Creativerevisualization />
      <Aidesigngenration />
      <Whatourclientssay />
      <Calltoaction />
      <Frequentlyaskedquestions />
      <Footer />
    </div>
  );
}

export default App;

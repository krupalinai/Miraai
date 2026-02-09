import { useState } from 'react'
import '../App.css'
import Percentage from '../components/percentage'
import GlobalGiants from '../components/global_giants'
import Features from '../components/features'
import TrustMiraai from '../components/trust_miraai'
import DoBest from '../components/do_best'
import AiContent from '../components/ai_content'
import Header from '../components/header'
import Supportingline from '../components/Supportingline';
import UsesMiraai from '../components/UsesMiraai';
import BusinessesChooseMiraai from '../components/BusinessesChooseMiraai';
import Creativerevisualization from '../components/Creativerevisualization';
import Aidesigngenration from '../components/Aidesigngenration';
import Whatourclientssay from '../components/whatourclientssay';
import Calltoaction from '../components/Calltoaction';
import Frequentlyaskedquestions from '../components/Frequentlyaskedquestions';
import Footer from '../components/Footer';

function Home() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Header />
            <Percentage />
            <GlobalGiants />
            <Features />
            <TrustMiraai />
            <DoBest />
            <AiContent />
            <Supportingline />
            <UsesMiraai />
            <BusinessesChooseMiraai />
            <Creativerevisualization />
            <Aidesigngenration />
            <Whatourclientssay />
            <Calltoaction />
            <Frequentlyaskedquestions />
            <Footer />
        </>
    )
}

export default Home

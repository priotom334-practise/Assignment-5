import Nav from './components/nav';
import Hero from './components/hero';
import Content from "./components/content";
import { Suspense } from 'react';
import type { Contenttype } from './components/types';
import Footer from './components/footer';


const toolsFetch = async() : Promise<Contenttype[]>=> {
    const res = await fetch('/data.json');
    const data = await res.json();
    return data;
}

function App() {
    const promiseTools = toolsFetch();
    return (
        <>
            <Nav />
            <Hero />
            <Suspense fallback={<h2>Loading...</h2>}>
                <Content promiseTools={promiseTools} />
            </Suspense>
            
            <Footer />
        </>

    );

}

export default App

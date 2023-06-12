import React from 'react';
import Section1Component from './main_intro/Section1Component';
import Section2Component from './main_intro/Section2Component';
import Section3Component from './main_intro/Section3Component';
import Section4Component from './main_intro/Section4Component';
import Section5Component from './main_intro/Section5Component';
import Section6Component from './main_intro/Section6Component';
import Section7Component from './main_intro/Section7Component';
import Section8Component from './main_intro/Section8Component';



export default function MainIntroComponent ({setViewProduct, key})  {

    return (
        <main id='main' className='sub-page intro'>
            <Section1Component/>
            <Section2Component />
            <Section3Component setViewProduct={setViewProduct} key={key}/>
            <Section4Component setViewProduct={setViewProduct} key={key}/>
            <Section5Component setViewProduct={setViewProduct} key={key}/>
            <Section6Component />
            <Section7Component setViewProduct={setViewProduct} key={key}/>
            <Section8Component/>
        </main>
    );
};


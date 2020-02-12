//import Link from 'next/link';
import Layout from '../components/Layout.js';

export default function Index() {
    return (
        <Layout>
        <head>
            <!-- Global site tag (gtag.js) - Google Analytics -->
            <script async src="https://www.googletagmanager.com/gtag/js?id=UA-158288853-1"></script>
            <script>
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());

              gtag('config', 'UA-158288853-1');
            </script>
         </head>
        <div className="divOne">
            <h1>Hello! My name is Cara Spall.</h1>
            <div className="imgDiv">
            <img src="/static/Cara.png" alt="Cara image"/>
            </div>
            <div className="intro">
            <p>I am a film scholar by education, digital marketer by profession, artist by enthusiasism, and 
                (unsuccessful) web developer by imagination.
            </p>
            </div>
            
            
            <style jsx>{`
            .divOne {
                border: solid;
                text-align: center;
                background-color: azure;
            }
            div {
                margin-top: 20px;
                margin-bottom: 20px;
                border: solid;
            }
            img {
                height: auto;
                width: 10%;
            }
            a {
                border: solid;
                margin-left: 5px;
                margin-top: 10px;
                background-color: white;
                padding: 5px;
            }
            .intro {
                background-color: mistyrose;
            }
            .imgDiv {
                background-color: lavender;
            }
            `}
            </style>
            </div>
    </Layout>
    );
}

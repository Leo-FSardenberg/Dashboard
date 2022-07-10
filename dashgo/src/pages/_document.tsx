import Document, { Html,Head, NextScript, Main } from "next/document";


export default class Mydocument extends Document {

    render() {
  return(
<Html>
    <Head>
<link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,600;1,400&family=Roboto:ital,wght@0,400;0,500;0,700;1,400&display=swap" rel="stylesheet"/>
    </Head>
    <body>
        <Main/>
        <NextScript/>
    </body>
    </Html>
  )}
}

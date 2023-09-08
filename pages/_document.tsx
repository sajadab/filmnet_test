import {Head, Html, Main, NextScript} from 'next/document'

export default function Document() {
    return (
        <Html lang="fa" dir={"rtl"} style={{backgroundColor:"rgb(28,28,28)"}}>
            <Head>
                <title>فیلم نت</title>
                <meta name={"description"} content={"تست فیلم نت"} />
            </Head>
            <body>
                <Main/>
                <NextScript/>
            </body>
        </Html>
    )
}

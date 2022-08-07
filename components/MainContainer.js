
import Head from "next/head"
import A from "./A"

const MainContainer = ({children, keywords}) => {

    return (
        <>

            <Head>

                <meta keywords = {"go next js, go react " + keywords}></meta>
                <title>Главная страница</title>
            </Head>

            <nav className = "navbar">
                <A href = {'/'} text = "Главная" />
                <A href = {'/users'} text = "Пользователи" />
            </nav>
            <div>
                {children}
            </div>

            <style jsx>
              {`


                .navbar {

                    background: #02AAFC;
                    display: inline-flex;
                    margin: 0 auto;
                    padding: 20px 100px;
                }

              `}
            </style>
        </>
    )
}

export default MainContainer
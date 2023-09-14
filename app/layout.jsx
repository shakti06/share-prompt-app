import '@styles/global.css';

export const metadata = {
    title : "Share-Prompt",
    description : "share prompt app"
}


const RootLayout = ({ children}) => {
  return (
    <html lang='en'>
        <div className='main'>
            <div className='gradient'/>
        </div>

        <main className='app'>
            {children}
        </main>

    </html>
  )
}

export default RootLayout
